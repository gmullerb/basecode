//  Copyright (c) 2017 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

const fs = require("fs");
const vm = require("vm");
const recurfs = require("recur-fs");
const webdriver = require("selenium-webdriver");
const Browser = require("selenium-webdriver/lib/capabilities").Browser;
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
const HtmlSpecReporter = require("jasmine-pretty-html-reporter").Reporter;

const URL = process.env.npm_config_e2e_url;
const TESTS_DIR = process.env.npm_config_e2e_dir;
const REPORT_DIR = process.env.npm_config_e2e_report_dir;
const TIMEOUT_TEST = 15000;
const LOAD_TIMEOUT = 20000;
const BROWSERS = [Browser.CHROME, Browser.FIREFOX];

console.debug(`Test folder: ${TESTS_DIR}`);
const testFilePattern = /.*\.e2e-test\.js/;
const tests = recurfs.readdir.sync(TESTS_DIR,
  (name, stat) => stat.isFile() && testFilePattern.test(name)
).map((file) => fs.readFileSync(file));

jasmine.DEFAULT_TIMEOUT_INTERVAL = TIMEOUT_TEST;
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter());
jasmine.getEnv().addReporter(new HtmlSpecReporter({
  path: REPORT_DIR
}));

const builder = new webdriver.Builder();
global.e2e = {
  TIMEOUT_BROWSER: 10000,
  by: webdriver.By,
  until: webdriver.until
};
for(const browserName of BROWSERS) {
  ((name) => {
    describe(`E2E at ${name}`, () => {

      beforeAll((done) => {
        global.e2e.browser = builder.forBrowser(name).build();
        global.e2e.browser.then(done);
      });

      afterAll((done) => {
        global.e2e.browser.close().then(done);
      });

      beforeEach((done) => {
        global.e2e.browser.get(URL).then(done, () => done.fail("Unable to reach the host"));
      }, LOAD_TIMEOUT);

      tests.forEach((test) => vm.runInThisContext(test));
    });
  })(browserName);
}

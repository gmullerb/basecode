const commonCfg = require("./common-test.cfg.js");

commonCfg.files = ["main/modules/**/!(main).js",
  "main/modules/main.js",
  "test/**/*.test.js"];
commonCfg.preprocessors = { "main/modules/**/*.js": "coverage" };
commonCfg.reporters.push("coverage");
commonCfg.coverageReporter = {
  dir: process.env.npm_config_front_coverage_report_dir,
  reporters: [
    {type:"html"},
    {type:"text-summary"}
  ],
  check: {
    each: {
      statements: 95,
      branches: 95,
      functions: 95,
      lines: 95
    }
  }
};

module.exports = (cfg) => {
  cfg.set(commonCfg);
};

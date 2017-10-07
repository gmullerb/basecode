//  Copyright (c) 2017 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

const doubleRunner = require("double-runner");
const ENV = process.env.npm_config_e2e_env;
const URL = process.env.npm_config_e2e_url;
const JAR = process.env.npm_config_e2e_jar;
const TRIES = 5;

console.info(`Environment: ${ENV}`);
console.info(`URL: ${URL}`);
console.debug(`Running JAR: ${JAR}`);

doubleRunner.run(
  {
    command: "java",
    args: [`-Dspring.profiles.active=${ENV}`, "-jar", JAR]
  },
  {
    execute: `jasmine ${__dirname}/e2e.js`,
    url: URL,
    tries: TRIES,
    onExecuteSuccess: (stdout) => {
      console.log(stdout);
      console.info("E2E tests successfully ran");
    },
    onExecuteError: (stdout) => {
      console.error("E2E tests failed");
      console.error(stdout);
    },
    onTryError: (tryNumber) => {
      console.info(`Trying to connect to Server: Attempt ${tryNumber}`);
    },
    onTriesError: () => {
      console.error("E2E tests didn't run, Server not available");
    },
    onServerError: (status) => {
      console.error(`E2E tests didn't run, Server error: ${status}`);
    }
  }
);

//  Copyright (c) 2017 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

const spawn = require("child_process").spawn;
const exec = require("child_process").exec;
const http = require("http");
const TIMEOUT = 5000;
const TRIES = 5;

/**
 * Waits until HTTP Server is available or tries are finished.
 */
const serverChecker = {
  run: (thread, {url = "http://localhost:8080", expectedStatus = 200, onServerError = () => {},
    tries = TRIES, tryTimeout = TIMEOUT, onTryError = () => {}, onTriesError = () => {},
    execute, onExecuteSuccess = () => {}, onExecuteError = () => {}} = {}) => {
    if(0 !== tries) {
      setTimeout(() => {
        http.get(url, (res) => {
          if(res.statusCode === expectedStatus) {
            console.debug("Executing: %s", execute);
            exec(execute, (error, stdout, stderr) => {
              thread.kill();
              if (error) {
                onExecuteError(stdout, stderr);
                process.exit(1);
              }
              else {
                onExecuteSuccess(stdout, stderr);
              }
            });
          }
          else {
            thread.kill();
            onServerError(res.statusCode);
            process.exit(1);
          }
        }).on("error", () => {
          onTryError(TRIES - tries + 2);
          serverChecker.run(thread, {url,
            expectedStatus,
            onServerError,
            tries,
            tryTimeout,
            onTryError,
            onTriesError,
            execute,
            onExecuteSuccess,
            onExecuteError});
        });
      }, tryTimeout);
    }
    else {
      thread.kill();
      onServerError(-1);
      process.exit(1);
    }
  },
  validate: ({execute} = {}) => "string" === typeof execute && execute.trim().length
};

/**
 * @description Runs the indicated command in its own thread and then executed the indicated run.
 * @param {*} runner configuration {command: string, args: string[], onError: Function}
 *  command: command to execute.
 *  args: arguments for command.
 *  onError: Function to be executed in case of error.
 * @param {Object} runCfg Configuration for run
 * @param {Object} run {run: Function, validate: Function}
 *  run: function that receives 2 parameters
 *   thread: command's assigned thread (should be kill when done inside the run)
 *   runCfg: configuration for this run
 *  validate: (Optional) function to validate configuration 'runCfg' before running the process
 * Default: serverChecker
 */
const runner = ({command, args = [], onError = () => {}} = {}, runCfg, run = serverChecker) => {
  console.debug(`Command: ${command}`);
  console.debug(`Arguments: ${args}`);
  switch(true) {
    case "string" !== typeof command || !command.trim().length:
      throw new Error(`'command' must be a valid value: '${command}'`);
    case run.validate && !run.validate(runCfg):
      throw new Error(`invalid run ${runCfg}`);
  }
  let thread = null;
  (thread = spawn(command, args, {detached: true,
    stdio: "ignore"}))
    .on("error", () => {
      onError();
    });
  if(thread.pid) {
    run.run(thread, runCfg);
  }
  else {
    onError();
  }
};

module.exports = {
  run: runner,
  serverChecker: serverChecker
};

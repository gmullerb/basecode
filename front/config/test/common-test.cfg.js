module.exports = {
  basePath: process.env.npm_config_front_src_dir,
  frameworks: ["jasmine"],
  browsers: ["PhantomJS"],
  singleRun: true,
  autoWatch: false,
  reporters: ["mocha", "html"],
  htmlReporter: {
    focusOnFailures: false,
    outputDir: process.env.npm_config_front_test_report_dir
  }
};

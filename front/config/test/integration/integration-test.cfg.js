const commonCfg = require("../common-test.cfg.js");

commonCfg.frameworks.unshift("jasmine-jquery");
commonCfg.files = ["../config/test/integration/jasmine.cfg.js",
  "main/config/environment.js",
  "test/config/environment-test.js",
  "main/modules/**/!(main).*",
  "main/modules/main.js",
  "test/**/*.integration-test.js"];
commonCfg.preprocessors = { "test/config/environment-test.js": "renamer" };
commonCfg.renamerPreprocessor = {
  transformPath: function (path) {
    return path.replace("test/config/environment-test.js", "main/config/environment-more.js");
  }
};

module.exports = (cfg) => {
  cfg.set(commonCfg) ;
};


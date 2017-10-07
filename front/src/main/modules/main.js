/**
 * @fileOverview Main entry point.
 * @version 0.0.1
 */
(function () {
  window.main = {
    create: function () {
      return "<h1>" + module.fitYourNeeds() + " " + $env.key1 + "</h1>";
    }
  };
}());

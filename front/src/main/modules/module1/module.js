/**
 * @fileOverview Main Module.
 * @version 0.0.1
 */
(function () {
  /**
   * @namespace module
   * @description Description of the module namespace.
   */
  window.module = {
    /**
     * @function
     * @alias module.fitYourNeeds
     * @description Demo function.
     * @return {number} Title text to be shown.
     */
    fitYourNeeds : function () {
      return "TheTitle " + $env.key2;
    },
    show: function () {
      document.getElementById("main").innerHTML = "<h1 id='result'>" + this.fitYourNeeds() + "</h1>";
    }
  };
}());

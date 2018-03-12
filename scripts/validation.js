(function() {
  "use strict";
  var App = window.app || {};

  var Validation = {
    isCompanyEmail: function(email) {
      return /.+@bignerdranch\.com$/.test(email);
    }
  };

  App.Validation = Validation;
  window.App = App;
})(window);

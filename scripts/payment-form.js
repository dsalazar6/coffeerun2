(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-payment-info='form']";
  var App = window.App;
  var $ = window.jQuery;
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    var $div = $("<div></div>", {
      'class': "modal"
    });
    var $p = $("<p></p>");
    var message = "Thank you for your payment, ";
    message += data.title + " ";
    message += data.username;
    $p.append(message);
    $div.append($p);
    $div.modal();
  });
  console.log(formHandler);
})(window);

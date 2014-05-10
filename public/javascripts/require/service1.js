define(['require/app'], function(module) {
  module.factory('Service1Srv', function () {
    return function () {
      return "Hello from Service1!";
    }
  });
});

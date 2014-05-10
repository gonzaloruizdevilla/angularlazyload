define(['require/app'], function(module) {
  module.factory('Service2Srv', function () {
    return function () {
      return "Hello from Service2!";
    }
  });
});

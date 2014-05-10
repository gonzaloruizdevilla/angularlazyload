define(['require/app', 'require/service2'], function(module) {
  module.controller('url22Ctrl', function ($scope, Service2Srv) {
    $scope.whoami = 'url22Ctrl';
    $scope.whoismyservice = Service2Srv();
  });
});

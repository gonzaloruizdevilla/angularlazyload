define(['require/app', 'require/service2'], function(module) {
  module.controller('url21Ctrl', function ($scope, Service2Srv) {
    $scope.whoami = 'url21Ctrl';
    $scope.whoismyservice = Service2Srv();
  });
});

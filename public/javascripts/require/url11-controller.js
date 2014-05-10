define(['require/app', 'require/service1'], function(module) {
  module.controller('url11Ctrl', function ($scope, Service1Srv) {
    $scope.whoami = 'url11Ctrl';
    $scope.whoismyservice = Service1Srv();
  });
});

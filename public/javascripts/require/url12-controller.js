define(['require/app', 'require/service1'], function(module) {
    module.controller('url12Ctrl', function ($scope, Service1Srv) {
    $scope.whoami = 'url12Ctrl';
    $scope.whoismyservice = Service1Srv();
  });
});

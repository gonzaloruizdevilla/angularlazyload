require(["require/app"], function(module) {

  module.controller('MainCtrl', function ($scope, $location) {
    $scope.urls = ['/url11', '/url12', '/url21', '/url22'];
    $scope.$watch('location', function (newValue) {
      $location.path(newValue);
    });
    $scope.location = $scope.urls[0];
  });

});

var module = angular.module('winLateRegister', ['hljs']);

function registerService(number){
  module.factory('Service' + number + 'Srv', function x(){
    return {
      method: function () {
        return 'Hello from service '+ number + '!';
      }
    };
  });
}

function registerLazyService(number){
  module.lazy.factory('Service' + number + 'Srv', function x(){
    return {
      method: function () {
        return 'Hello from service '+ number + '!';
      }
    };
  });
}

registerService(1);

module.controller('DefaultCtrl', function ($scope, $injector) {
  $scope.registerService2 = function() {
    registerLazyService(2);
    $scope.registrado = "Service registered.";
  };

  $scope.useService1 = function (){
    $scope.resultadoServicio1 = $injector.get('Service1Srv').method();
  };

  $scope.useService2 = function (){
    try {
      $scope.resultadoServicio2 = $injector.get('Service2Srv').method();
    } catch( ex ){
      $scope.resultadoServicio2 = ex.toString();
    }
  };
});

module.config(function (
  $controllerProvider,
  $compileProvider,
  $filterProvider,
  $provide
){
  module.lazy = {
    controller: $controllerProvider.register,
    directive: $compileProvider.directive,
    filter: $filterProvider.register,
    factory: $provide.factory,
    service: $provide.service
  };
});

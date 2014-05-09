var module = angular.module('winLateRegister2', []);

function registerService(number){
    module.factory('Service' + number + 'Srv', function x(){
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
        registerService(2);
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

module.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
    module.controller = $controllerProvider.register;
    module.directive = $compileProvider.directive;
    module.filter = $filterProvider.register;
    module.factory = $provide.factory;
    module.service = $provide.service;
});

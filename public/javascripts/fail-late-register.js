var module = angular.module('failLateRegister', []);

function registerService(number){
    module.factory('Service' + number + 'Srv', function x(){
        return {
            method: function () {
                return 'Hello from service '+ number + '!';
            }
        };
    });
}

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

registerService(1);

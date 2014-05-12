define(['domReady', 'angular', 'ngRoute', 'hljs'], function() {

  var module = angular.module('requireLoad', ['ngRoute', 'hljs']);

  var routes = {
    'url11': ['require/url11-controller'],
    'url12': ['require/url12-controller'],
    'url21': ['require/url21-controller'],
    'url22': ['require/url22-controller']
  };

  function resolveDependencies(config, dependencies) {
    config.resolve = {
      dependencies: function ($q, $rootScope) {
        var deferred = $q.defer();
        require(dependencies, function () {
            $rootScope.$apply(function () {
                deferred.resolve();
            });
        });
        return deferred.promise;
      }
    };
  }

  module.config(function ($routeProvider) {
    angular.forEach(routes, function (values, key) {
      var config = {
          controller: key + 'Ctrl',
          templateUrl: 'partial/' + key
      };
      resolveDependencies(config, values);
      $routeProvider.when('/' + key, config);
    });
    $routeProvider.otherwise({
        redirectTo: '/url11'
    });
  });

  module.config(function (
    $controllerProvider,
    $compileProvider,
    $filterProvider,
    $provide
  ) {
    module.controller = $controllerProvider.register;
    module.directive = $compileProvider.directive;
    module.filter = $filterProvider.register;
    module.factory = $provide.factory;
    module.service = $provide.service;
  });

  return module;
});

var module = angular.module('lazyLoad', ['ngRoute', 'hljs']);

var routes = {
  'url11': [
    'javascripts/lazy/url11-controller.js',
    'javascripts/lazy/service1.js'
  ],
  'url12': [
    'javascripts/lazy/url12-controller.js',
    'javascripts/lazy/service1.js'
  ],
  'url21': [
    'javascripts/lazy/url21-controller.js',
    'javascripts/lazy/service2.js'
  ],
  'url22': [
    'javascripts/lazy/url22-controller.js',
    'javascripts/lazy/service2.js'
  ]
};


function resolveDependencies(config, dependencies) {
  config.resolve = {
    dependencies: function ($q, $rootScope) {
      var deferred = $q.defer();
      $script(dependencies, function () {
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
){
  module.controller = $controllerProvider.register;
  module.directive = $compileProvider.directive;
  module.filter = $filterProvider.register;
  module.factory = $provide.factory;
  module.service = $provide.service;
});

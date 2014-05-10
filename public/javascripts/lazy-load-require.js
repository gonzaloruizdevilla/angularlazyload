requirejs.config({
    paths: {
      'domReady': '../../bower_components/requirejs-domready/domReady',
      'angular': '../../bower_components/angular/angular',
      'ngRoute': '../../bower_components/angular-route/angular-route'
    },
    shim: {
      'angular': {
        exports: 'angular'
       },
      'ngRoute': {
        deps: ['angular'],
        exports: 'ngRoute'
      }
    }
});

define(['angular', 'ngRoute', 'require/main-controller'], function(domReady) {
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['requireLoad']);
    });
});

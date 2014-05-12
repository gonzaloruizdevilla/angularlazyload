requirejs.config({
    paths: {
      'domReady': '../../bower_components/requirejs-domready/domReady',
      'angular': '../../bower_components/angular/angular',
      'ngRoute': '../../bower_components/angular-route/angular-route',
      'hljs':    '../../bower_components/angular-highlightjs/angular-highlightjs'
    },
    shim: {
      'angular': {
        exports: 'angular'
       },
       'hljs': {
         deps: ['angular'],
         exports: 'hljs'
       },
      'ngRoute': {
        deps: ['angular'],
        exports: 'ngRoute'
      }
    }
});

define(['angular', 'ngRoute', 'hljs', 'require/main-controller'], function(domReady) {
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['requireLoad']);
    });
});

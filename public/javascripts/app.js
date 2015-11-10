var app = angular.module("SchoolChoice", ['ngRoute', 'ngMaterial', 'uiGmapgoogle-maps']);

  app.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyASYx0I9SefvW5_8LXmnFCT6M7jLwF0hg0',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
  });

  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: '/public/templates/login.html',
          controller: 'LoginCtrl'
        })
        .when('/first-time-user', {
          templateUrl: '/public/templates/first-time-user.html',
          controller: 'FirstTimeUserCtrl'
        })
        .when('/school-maps', {
          templateUrl: '/public/templates/school-maps.html',
          controller: 'SchoolMapsCtrl'
        })
        .otherwise({
          redirectTo: '/login'
        });
    }
  ]);
  
"use strict";

var app = angular.module("RouteApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.
  when('/route66', {
    templateUrl: 'partials/route66.html',
    controller: 'highway1Ctrl'
  }).
  when('/pacificCoast', {
    templateUrl: 'partials/pacificCoast.html',
    controller: 'highway2Ctrl'
  }).
  otherwise('/');
});

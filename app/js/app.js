'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute' , 'psMenu', 'psDashboard' ,'psFramework']);
 
var psMenu = angular.module("psMenu", []);  
var psDashboard = angular.module("psDashboard", []);
var psFramework = angular.module("psFramework", ["psMenu", "psDashboard"]);

eventsApp.config(function($routeProvider) {
         $routeProvider.when('/Auction',
            {
                templateUrl:'templates/Auction.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/TeamList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                templateUrl: 'templates/TeamDetails.html',
                controller: 'EventController'
            });

          $routeProvider.otherwise({redirectTo: '/events'});
    });

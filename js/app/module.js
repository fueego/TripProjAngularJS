(function(){

    'use strict';

    angular.module('yourTrip', ['ngRoute']);

    angular.module('yourTrip').config(function( $routeProvider, $locationProvider ){
        $routeProvider
            .when('/', { template: "<main-site></main-site>" })
            .when('/account', {template: "Website with account details"})
            .when('/addTrip', {template: "Place where you can add new trip"})
            .when('/trip/:id', {template: "<trip-details></trip-details>"})
            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true)
    });

})();
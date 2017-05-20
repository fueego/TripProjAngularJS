(function(){
    'use strict';

    angular.module("yourTrip").component("tripDetails", {
        templateUrl: "./js/app/components/sites/tripDetails/tripDetails-component.html",
        controllerAs: "model",
        controller: ['$routeParams', tripDetController]
    });    

    function tripDetController($routeParams){
        var model = this;

        if($routeParams.id > 0 && parseInt($routeParams.id)){
            //make http request for data == id
            model.trip = $routeParams.id;
        }
    }
})();
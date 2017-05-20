(function(){
    'use strict';

    angular.module("yourTrip").component("ratingStars", {
        templateUrl: "./js/app/components/sites/mainSite/mainSite-rating-template.html",
        controllerAs: "model",
        controller: [ratingVontroller],
        bindings: {
            stars: '<'
        }
    });

    function ratingVontroller(){
        var model = this;
        model.howMany = [];

        model.$onInit = function(){
            model.howMany = new Array(model.stars); 
        }
    }
    
})();
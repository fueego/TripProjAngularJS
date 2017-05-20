(function(){
    'use strict';

    //component init
    angular.module("yourTrip").component("mainSite", {
        templateUrl: "./js/app/components/sites/mainSite/mainSite-template.html",
        controllerAs: "model",
        controller: ['fetchData', mainSiteController]
    });

    //controller
    function mainSiteController(fetchData){
        var model = this;
        model.listData = [];        

        model.$onInit = function(){
            fetchData.then(function(data){
                model.listData = data;
            });
        }

    }

    //factory for fetching data
    angular.module('yourTrip').factory('fetchData',['$http', function($http){
        return $http.get('./js/jsonData.js').then( 
            function successInfo(result) {
                return result.data;
            },
            function failInfo(result){
                console.log("[ Error: " + result.message + " ]" );
            });
    }]);

})();
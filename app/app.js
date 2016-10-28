'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.mainView',
    'myApp.eventView',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/mainView'});
}]).factory("ReservationService", function () {
    return {
        getRoom: function () {
            return { //grabbed using $http
                name: "Auditorium"
            };
        },
        getReservations: function() {
            return [
                {
                    title: "Fight the New Drug",
                    startTime: "10/28/2016 7:30 PM",
                    endTime: "10/28/2016 8:30 PM"
                },
                {
                    title: "Zero Fatalities",
                    startTime: "10/28/2016 8:30 PM",
                    endTime: "10/28/2016 9:30 PM"
                }
            ];
        }
    }
}).factory("RouterService", ['$location', function($location) {
    return {
        main: function () {
            $location.path("/mainView");
        },
        events: function() {
            $location.path("/eventView");
        }
    }
}]);

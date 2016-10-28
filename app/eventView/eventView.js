'use strict';

angular.module('myApp.eventView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/eventView', {
            templateUrl: 'eventView/eventView.html',
            controller: 'EventViewCtrl'
        });
    }])

    .controller('EventViewCtrl', ['$scope', 'ReservationService', 'RouterService',
        function ($scope, ReservationService, RouterService) {

        $scope.room = ReservationService.getRoom(); //theres a better way to use it, idk how
        $scope.reservations = ReservationService.getReservations();

        $scope.switchBack = function () {
            RouterService.main();
        }

    }]);
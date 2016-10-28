'use strict';

angular.module('myApp.mainView', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/mainView', {
            templateUrl: 'mainView/mainView.html',
            controller: 'MainViewCtrl'
        });
    }])

    .controller('MainViewCtrl', ['$scope', '$timeout', '$location', 'ReservationService', 'RouterService',
        function ($scope, $timeout, $location, ReservationService, RouterService) {

        $scope.room = ReservationService.getRoom(); //theres a better way to use it, idk how
        $scope.reservations = ReservationService.getReservations();

        $scope.trimTime = function(datetime) {
            //dont use this in production
            return datetime.substr(0, 11);
        };
        $scope.trimDate = function(datetime) {
            //dont use this in production
            return datetime.substr(11, datetime.length);
        };

        $scope.switch = function() {
          RouterService.events();
        };

        function checkTime(i) {
            return (i < 10) ? "0" + i : i;
        }

        var tick = function () {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            // add a zero in front of numbers<10
            m = checkTime(m);
            $scope.timeDisplay = h + ":" + m;
            $timeout(tick, 30000)
        };
        $timeout(tick, 0);


    }]);
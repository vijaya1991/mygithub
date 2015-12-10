/// <reference path="angular.js" />
var myapp = angular
            .module("MyModule", [])
            .controller("MyController", function ($scope) {
                $scope.username = 'Aslam Nagarboudi';
                $scope.email = 'aslam.nagarboudi@gmail.com';
            });
'use strict';

angular.module('uploadimageApp')
    .controller('ProjectController', function ($scope, $state, DataUtils, Project) {

        $scope.projects = [];
        $scope.loadAll = function() {
            Project.query(function(result) {
               $scope.projects = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.project = {
                name: null,
                picture: null,
                pictureContentType: null,
                id: null
            };
        };

        $scope.abbreviate = DataUtils.abbreviate;

        $scope.byteSize = DataUtils.byteSize;
    });

'use strict';

angular.module('uploadimageApp')
    .controller('ProjectDetailController', function ($scope, $rootScope, $stateParams, DataUtils, entity, Project) {
        $scope.project = entity;
        $scope.load = function (id) {
            Project.get({id: id}, function(result) {
                $scope.project = result;
            });
        };
        var unsubscribe = $rootScope.$on('uploadimageApp:projectUpdate', function(event, result) {
            $scope.project = result;
        });
        $scope.$on('$destroy', unsubscribe);

        $scope.byteSize = DataUtils.byteSize;
    });

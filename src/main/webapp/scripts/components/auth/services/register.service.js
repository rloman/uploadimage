'use strict';

angular.module('uploadimageApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });



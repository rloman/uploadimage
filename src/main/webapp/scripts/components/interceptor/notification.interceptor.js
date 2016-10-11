 'use strict';

angular.module('uploadimageApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-uploadimageApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-uploadimageApp-params')});
                }
                return response;
            }
        };
    });

(function() {
	'use strict';

	var app = angular.module('ors-http', []);

	app.config(['$httpProvider', '$provide', function($httpProvider, $provide) {
		
	
		// register the interceptor as a service
		$provide.factory('myHttpInterceptor', ['$injector', function($injector) {
			var $q = $injector.get('$q');
			var $rootScope = $injector.get('$rootScope');
			var $timeout = $injector.get('$timeout');
			$rootScope.counter = 0;
			$rootScope.showSpinner = false;
			
			var startSpin = function() {
				$rootScope.counter++;
				$timeout(function() {
					if ($rootScope.counter > 0) {
						$rootScope.showSpinner = true;
					}
				}, 500);
			};
			
			var stopSpin = function() {
				$rootScope.counter--;
				if ($rootScope.counter == 0) {
						$rootScope.showSpinner = false;
					}
			}
			
			return {
				// optional method
				'request': function(config) {
					// do something on success
					console.log('interceptor request', arguments);
					startSpin();
					return config;
				},

				// optional method
				'requestError': function(rejection) {
					console.log('interceptor requestError', arguments);
					// do something on error
					if (canRecover(rejection)) {
						return responseOrNewPromise
					}
					return $q.reject(rejection);
				},



				// optional method
				'response': function(response) {
					console.log('interceptor response', arguments);
					// do something on success
					stopSpin();
					return response;
				},

				// optional method
				'responseError': function(rejection) {
					console.log('interceptor responseError', arguments);
					stopSpin();
					// do something on error
					if (canRecover(rejection)) {
						return responseOrNewPromise
					}
					return $q.reject(rejection);
				}
			};
		}]);

		$httpProvider.interceptors.push('myHttpInterceptor');
	}]);


})();

(function() {
	'use strict';

	describe('ors-products', function() {
	
		beforeEach(module('ors-products'));
		
		describe('ors-products.Ctrl', function() {
			var $scope;
			var $http;
			var $controller;
			var $rootScope;

			beforeEach(inject(['$injector', function($injector) {
				$http = $injector.get('$httpBackend');
				$controller = $injector.get('$controller');
				$rootScope = $injector.get('$rootScope');
				
				$scope = $rootScope.$new();
				$controller('ors-products.Ctrl', {$scope: $scope});
				
				var h = $http.when('GET', '../ws/releve.csv');
				h.respond('');
			}]));
		
			it('should show correctly the csv file', function() {
				$http.expectGET('../ws/releve.csv');
				$http.flush();
				expect($scope.lines.length).toEqual(3);
			});
		});
	});
})();


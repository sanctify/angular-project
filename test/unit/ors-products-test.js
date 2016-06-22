(function() {
	'use strict';

	describe('ors-products', function() {
	
		beforeEach(module('ors-products'));
		jasmine.getJSONFixtures().fixturesPath = 'base/test/mock';
		
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
				
				$http.when('GET', '../ws/releve.csv').respond(getJSONFixture('releve.json').content);
			}]));
		
			it('should show correctly the csv file', function() {
				$http.expectGET('../ws/releve.csv');
				$http.flush();
				expect($scope.lines.length).toEqual(3);
			});
		});
	});
})();


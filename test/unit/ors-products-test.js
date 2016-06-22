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
				
				$http.when('GET', '../ws/releve.csv').respond('Libellé;date;debit;credit\n' + 
'Paire de Chaussettes;12/04/2016;10.00;\n' + 
'Salaire;13/04/2016;;1512.45\n' + 
'Four à MO;14/04/2016;514.00;');
			}]));
		
			it('should show correctly the csv file', function() {
				$http.expectGET('../ws/releve.csv');
				$http.flush();
				expect($scope.lines.length).toEqual(3);
			});
		});
	});
})();


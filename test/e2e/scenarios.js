(function() {
	'use strict';

	describe('Hello World app', function() {

		describe('Main page', function() {

			beforeEach(function() {
				browser.get('app/index.html');
			});

			it('should reflect the message when typing it', function() {
				var button = element.all(by.css('ors-header a')).get(1);
				button.click();
				var ligne = element.all(by.css('tbody tr')).get(1);
				var champ = ligne.all(by.css('td')).get(0);
				expect(champ.getText()).toEqual('Salaire');
			});
		});
	});
})();

(function() {
	'use strict';

	var clone = function(o) {
		var result = {};
		for (var p in o) {
			if ((typeof o[p] === "object") && (o[p] !== null)) {
				result[p] = clone(o[p]);
			} else {
				result[p] = o[p];
			}
		}
		return result;
	};
	
	var a = {
		s: 45,
		t: {
			y: 12
		}
	};
	
	var b = clone(a);
	console.log('a.t.y', a.t.y);
	console.log('b.t.y', b.t.y);
	a.t.y = 55;
	console.log('a.t.y', a.t.y);
	console.log('b.t.y', b.t.y);
})();

myApp.filter('customFilterDuration', function () {
	// modify input
	// return modifiedInput
	return function (input /*, filter parameters */) {
		switch (input) {
			case 1:
				return "Half Hour";
			case 2:
				return "1 hour";
			case 3:
				return "Half day";
		}
	}
});
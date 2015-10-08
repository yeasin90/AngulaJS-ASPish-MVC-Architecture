var myApp = angular.module('home', ["ngRoute", "ngSanitize"]);

myApp.config(function ($routeProvider) {
	$routeProvider
		.when("/main", {
			templateUrl: "View/main.html",
			controller: "MainController"
		})
		.when("/user/:username", {
			tempData: 'bad',
			templateUrl: "View/user.html",
			controller: "UserController"
		})
		.when("/newEvent", {
			templateUrl: "View/newEvent.html",
			controller: "EventController"
		})
		.when("/events", {
			templateUrl: "View/eventDetails.html",
			controller: "EventController"
		})
		.otherwise({
			redirectTo: "/"
		});
});

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
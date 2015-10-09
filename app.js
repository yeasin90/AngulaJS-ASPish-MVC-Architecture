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
		.when("/sampleDirective", {
			templateUrl: "View/SampleDirective.html",
			controller: "SampleDirectiveController"
		})
		.otherwise({
			redirectTo: "/"
		});
});




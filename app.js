var myApp = angular.module('home', ["ngRoute","ngSanitize"]);

myApp.config(function($routeProvider){
	$routeProvider
		.when("/main",{
			templateUrl: "View/main.html",
			controller: "MainController"
		})
		.when("/user/:username",{
			templateUrl: "View/user.html",
			controller: "UserController"
		})
		.when("/newEvent",{
			templateUrl: "View/NewEvent.html",
			controller: "EventController"
		})
		.when("/eventDetails",{
			templateUrl: "View/eventDetails.html",
			controller: "EventController"
		})
		.otherwise({redirectTo: "/main"});	
});
var myApp = angular.module('home', ["ngRoute"]);

myApp.config(function($routeProvider){
	$routeProvider
		.when("/main",{
			templateUrl: "main.html",
			controller: "MainController"
		})
		.when("/user/:username",{
			templateUrl: "user.html",
			controller: "UserController"
		})
		.otherwise({redirectTo: "/main"});	
});
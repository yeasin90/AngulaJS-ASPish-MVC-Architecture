var myApp = angular.module('home', ["ngRoute"]);

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
		.otherwise({redirectTo: "/main"});	
});
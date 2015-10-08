(function () {
	var UserController = function ($scope, $routeParams, $route, GithubService) {
		
		console.log($route.current.tempData);
		console.log($route.current.params.foo); // /index.html#/user/yeasin90?foo=200
		console.log($route.current.params.username);
		console.log($route.current.pathParams.username);
		console.log($route.current.pathParams.foo); // undefined
		// difference between params and path params : 
		// 1. pathParams can access only parameters that are inlcuded in Route. Cannot access query string parameters
		// 2. params can access route parameters and query string parameters
		
		$scope.buttonShow = false;
		var callbacks = {
			begin: function(){
				$scope.status = "Loading..Please wait";
			},
			success: function (response) {
				$scope.repos = response;
			},
			end: function(){
				$scope.status = "Finished loading";
				$scope.buttonShow = true;
				
			},
			error: function () {
				$scope.status = "Failed to get data";
			}
		};

		GithubService.getGithubData($routeParams.username, callbacks);
		
		$scope.reload = function(){
				$route.reload();
		};
	};

	myApp.controller('UserController', ['$scope', '$routeParams', '$route', 'GithubService', UserController]);
})();
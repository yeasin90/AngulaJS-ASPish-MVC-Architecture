(function () {
	var UserController = function ($scope, $routeParams, GithubService) {
		var callbacks = {
			begin: function(){
				$scope.status = "Loading..Please wait";
			},
			success: function (response) {
				$scope.repos = response;
			},
			end: function(){
				$scope.status = "Finished loading";
			},
			error: function () {
				$scope.status = "Failed to get data";
			}
		};

		GithubService.getGithubData($routeParams.username, callbacks);
	};

	myApp.controller('UserController', ['$scope', '$routeParams', 'GithubService', UserController]);
})();
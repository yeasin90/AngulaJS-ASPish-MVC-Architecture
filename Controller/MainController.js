(function () {

	var MainController = function ($scope, $location, LoginModel) {		
		//$scope.LoginModel =  new LoginModel(); // Initially pass empty model to View
		$scope.LoginModel = new LoginModel({ Username: 'Yeasin', Passowrd: '1234', GithubUsername: 'yeasin90' });

		$scope.Search = function (loginModel) {
			$location.path("/user/" + loginModel.GithubUsername);
		};
	}

	myApp.controller('MainController', ['$scope', '$location', 'LoginModel', MainController]);
})();
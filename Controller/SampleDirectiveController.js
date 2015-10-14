(function () {

	var SampleDirectiveController = function ($scope, $location) {
		$scope.name = 'Yeasin';
		$scope.roll = 100;
		$scope.country = 'Bangladesh';
		$scope.email = 'test@gmail.com';
		$scope.temp = 'Value from parent Scope';
		$scope.getScopeValue = function(){
			console.log('Name : ' + $scope.name + ' Roll : ' + $scope.roll + ' Country : ' + $scope.country);
		};
	};

	myApp.controller('SampleDirectiveController', ['$scope', '$location', SampleDirectiveController]);
})();
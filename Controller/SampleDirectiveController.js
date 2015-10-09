(function () {

	var SampleDirectiveController = function ($scope, $location) {
		$scope.name = 'Yeasin';
		$scope.getScopeValue = function(){
			console.log($scope.name);
		};
	};

	myApp.controller('SampleDirectiveController', ['$scope', '$location', SampleDirectiveController]);
})();
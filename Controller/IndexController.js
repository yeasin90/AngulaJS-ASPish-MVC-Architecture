(function () {

	var IndexController = function ($scope, $location) {
		console.log('absUrl: ', $location.absUrl());
		console.log('protocol: ', $location.protocol());
		console.log('port: ', $location.port());
		console.log('path: ', $location.path()); // route path
		console.log('search: ', $location.search()); // search params. Query string or others
		console.log('hash: ', $location.hash()); // hash value after URL
		console.log('url: ', $location.url());
	};

	myApp.controller('IndexController', ['$scope', '$location', IndexController]);
})();
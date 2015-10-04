var LoginService = function ($http) {

	this.checkLogin = function (usermodel) {
		console.log('Username : ' + usermodel.Username + ' Password : ' + usermodel.Password);
	};

	this.getGithubData = function (id, callBacks) {
		
		// Study more on JavaScript promise
		var promise = $http.get('https://api.github.com/users/' + id);
		
		promise.then(function(response){
			return $http.get(response.data.repos_url);
		})
		.then(function(response){
			callBacks.success(response.data);
		})
		.catch(function(reason) {
            console.log('Handle rejected promise ('+reason+') here.');
        });;
	};
};

myApp.service('LoginService', ['$http', LoginService]);
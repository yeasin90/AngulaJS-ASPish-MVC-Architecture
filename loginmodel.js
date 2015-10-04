// Pass single model to multiple controllers : http://www.webdeveasy.com/angularjs-data-model/
var LoginModel = function () {

	function LoginModel(bookData) {
		this.setData(bookData);
	};

	LoginModel.prototype = {
		setData: function (bookData) {
			angular.extend(this, bookData);
		},
		Username: '',
		Password: '',
		GithubUsername: ''
	};
	
	return LoginModel;
};

myApp.factory('LoginModel', LoginModel);
// Pass single model to multiple controllers : http://www.webdeveasy.com/angularjs-data-model/
var EventModel = function () {

	function EventModel(eventData) {
		this.setData(eventData);
	};

	EventModel.prototype = {
		setData: function (eventData) {
			angular.extend(this, eventData);
		},
		Name: '',
		Date:'',
		Time: '',
		Location:{
			City: '',
			Address: '',
			Province: ''
		},
		imageUrl: ''
	};
	
	return LoginModel;
};

myApp.factory('EventModel', EventModel);
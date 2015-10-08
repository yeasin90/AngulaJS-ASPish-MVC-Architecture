(function () {

	var EventController = function ($scope, EventModel) {	
		$scope.sortorder = 'name';
		$scope.testInput = '';	
		$scope.boolValue1 = true;
		$scope.boolValue2 = false;
		$scope.boolValue3 = true;
		$scope.boolValue4 = false;
		$scope.snippet = '<span style="color:red">hi there</span>';
		$scope.buttonDisabled1 = true;
		$scope.buttonDisabled2 = false;
		$scope.buttonDisabled2 = false;
		$scope.newevent = {};
		$scope.event = {
			name: 'Angular Boot Camp',
			date: new Date(),
			time: '10:30 am',
			locatiom: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				province: 'CA'
			},
			imageUrl: '/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directives Masterclass Introductory',
					creatorName: 'Bob Smith',
					duration: 1,
					level: 'Advanced',
					abstract: 'In this session you will learn the ins and outs of directive',
					upVoteCount: 100
				},
				{
					name: 'Scopes for fun and Profit',
					creatorName: 'John Doe',
					duration: 2,
					level: 'Introductory',
					abstract: 'This session will take a closer look at scopes',
					upVoteCount: 26
				},
				{
					name: 'Well Behaved Controller',
					creatorName: 'Jame Doe',
					duration: 3,
					level: 'Intermediate',
					abstract: 'Controllers are the begining of everything',
					upVoteCount: 61
				}
			]
		}
		
		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		};
		
		$scope.saveEvent = function(newevent){
				
		};
		
		$scope.cancelEdit = function(){
			window.location = '#/eventDetails';
		};
	}

	myApp.controller('EventController', ['$scope', '$location', 'EventModel', EventController]);
})();
myApp.directive('myDirective1', function ($compile) {
	return {
		// directives are used in HTML elements
		// we can use directive on HTML in four ways
		// 1. 'A' = attribute. example : <input type="text" custom-directive />
		// 2. 'E' = element. example : <custom-directive />
		// 3. 'C' = class. example : <div class="custom-directive"></div>
		// 4. 'M' = <div>{{custom-directive}}</div>
		// we define this way uisng 'restriction'		
		restrict: 'EA', 
		
		// If we set the below attribute, custom directive will be replace by it's value.
		// Here, we have an HTML markup as custom directive's value.
		// Advantage : No need to compile.
		template: "<h4>Child Scope attributes</h4>" +
				  "<hr />" +
				  "<label>Name : </label> {{name}} <input type='text' ng-model='name' />" +
				  "<br />" +
				 "<label>Roll : </label> {{roll}} <input type='text' ng-model='roll' />" +
				 "<br />" +
				 "<label>Country : </label> {{country}} <input type='text' ng-model='country' />" +
				 "<br />" +
				 "<button type='button' ng-click='action()'>Get Parent Scope</button>",
		
		// parameters of link function
		// 1. element = element on which we are applying custom directive
		// 2. scope = scope of the page where the element is place
		// 3. attrs =  attribute of the element where this directive will be applied
		// 4. controller = controller of the page.
		/*
		link: function(scope, element, attrs, controller){
			var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}} <br /> " + 
						  "<button class='btn' ng-click='getParentScope()'>Show Parent Scope State</button>";
			angular.element(element).html($compile(markup)(scope));
		},*/
		
		// inherits from parent scope or Controller scope where we will apply this directive
		// any changes made to the scope from Controller will have effect this directive
		// any changes made to the scope from this new directive will effect the scope of controller
		// So, both scope will be in sync
		//scope: false
		
		
		// inherits prototypically from parent scope or Controller scope
		// initially this will contain parent scope's value
		// if we change this directive's scope value, this will not effect parent scope
		//scope: true
		
		scope:{
			name: "@", // one way binding. Change in child scope will not affect parent
			roll: "=", // two way binding. Change in child scope will affect parent
			country: "=",
			action: "&" // this will invoke controller's method. Idea is, if any change happens inside directive then we will have  chance to notify controller.
		}
		
	};
});

myApp.directive('dateKeys', function () {
	return {
		restrict: 'A',
		link: function(scope, element, attrs, controller){
			element.on('keydown', function(event){
				if(isNumericKeyCode(event.keyCode) || isForwardSlashKeyCode(event.keyCode) || isNavigationKeyCode(event.keyCode)){
					return true;					
				}
				return false;
			});
		}
	}
	
	function isNumericKeyCode(keyCode){
		return (keyCode >= 48 && keyCode <=  57)
				|| (keyCode >= 96 && keyCode <=  105)
	}
	
	function isForwardSlashKeyCode(keyCode){
		return keyCode == 191;
	}
	
	function isNavigationKeyCode(keyCode){
		switch(keyCode){
			case 8: // backspace
			case 35:// end
			case 36:// home
			case 37:// left
			case 38:// up
			case 39:// right
			case 40:// down
			case 45:// ins
			case 46:// del
				return true;
			default:
				return false;
		}
	}
});

myApp.directive('funDirective', function () {
	return {
		restrict: 'E',
		scope: true,
		template: "<h4><input type='text' ng-model='temp' /> Status : {{directiveScope}}</h4>" + 
				  "<br />" +
				  "<button type='button' ng-click='directiveMethod()'>Directive's Controller Method</button>",	
		controller: function($scope){ 
			// directive's own controller
			// but the $scope is prototypically inherited from controller
			$scope.directiveScope = 'Value of Directive Scope';
			$scope.directiveMethod = function(){
				console.log("Directive's controller method");
				console.log($scope.temp); // this will print parent cotroller's value
				$scope.getScopeValue(); // this will call parent controller's method
			}
		}
		/*
		link: function(scope, element, attrs, controller){
			attrs.$observe('email', function(newValue,oldValue){
				if(newValue != oldValue){
					scope.valueTracker = 'Changed';
				}
			});
		}*/
	}
});

// mutliple directive controllers can communicates with each other. See below :
myApp.directive('greeting', function () {
	return {
		restrict: 'E',
		replace: 'true',
		transclude: true,
		// this transclude property is required.
		// this enables nested directives to comminicate with this directive
		template: "<button class='btn' ng-click='sayHello()'>Directive Controller Communication</button>",
		controller: function($scope){
			var greetings = ['hello'];
			$scope.sayHello = function(){
				alert(greetings.join());
			}
			this.addGretting = function(greeting){
				greetings.push(greeting);
			}
		}	
	};
})
	.directive('finnish',function(){
		return{
			restrict: 'A',
			require: '^greeting', 
			//transclude: true,
			// why this '^' symbol before drective name??
			// require attribute tells name of the directive to which it will communicate
			// require attribute directive must also be within the same element.
			// It will not work if this directive is a nested element like :
			// So, <greeting> <div finnish> </div> </greeting> will not work
			// Only : <greetin finnish /> will work
			// So, in order to work also for nested element, we specified '^'
			link: function(scope, element, attrs, controller){
				controller.addGretting('hei'); // this will call the method of a controller that has been defined in required attribute
			}
		}
	})
	.directive('bengali',function(){
		return{
			restrict: 'A',
			require: '^greeting', 
			//transclude: true,
			// why this '^' symbol before drective name??
			// require attribute tells name of the directive to which it will communicate
			// require attribute directive must also be within the same element.
			// It will not work if this directive is a nested element like :
			// So, <greeting> <div bengali> </div> </greeting> will not work
			// Only : <greetin bengali /> will work
			// So, in order to work also for nested element, we specified '^'
			link: function(scope, element, attrs, controller){
				controller.addGretting('কেমন আছেন');  // this will call the method of a controller that has been defined in required attribute
			}
		}
	});

// Use Jquery methods inside custom directives
myApp.directive('callJquery', function () {
	return{
		restrict: 'A',
		link: function(scope, element){
			element.click(function(event){
				alert('Jqeury Method');
			});
		}
	}
});	
	
myApp.directive('myDirective2', function () {
	return {
		restrict: 'E',
		replace: true, // study why this attribute is used
		templateUrl: 'View/eventThumbnail.html',
		// Isolate scope in AngularJS. In View/eventThumbnail.html, we have a scope variable.
		// That scope variable
		scope: {
			session: "=isolateScope"
		}
	}
});
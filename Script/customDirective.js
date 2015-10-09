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
		template: "<label>Child Scope : </label> {{name}}" +
				  "<br />" + 
				  "<label>Child Scope Input : </label> <input type='text' ng-model='name' />" +
				  "<br />" +
				  "<button type='button' ng-click='action()'>Get Child Scope</button>",
		
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
			name: "@",
			action: "&" // this will invoke controller's method. Idea is, if any change happens inside directive then we will have  chance to notify controller.
		}
		
	};
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
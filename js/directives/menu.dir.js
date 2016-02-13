angular
	.module('myStuff')

	.directive("navMenu", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/menu.html"
		};
	})
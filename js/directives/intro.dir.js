angular
	.module('myStuff')

	.directive("introHeader", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/intro.html"
		};
	})
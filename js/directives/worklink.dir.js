angular
	.module('myStuff')

	.directive("workLink", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/worklink.html"
		};
	})

	.directive("greenspaceLinks", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/greenspacelinks.html"
		};
	})
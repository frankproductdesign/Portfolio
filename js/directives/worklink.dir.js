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

	.directive("rapidphireLinks", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/rapidphirelinks.html"
		};
	})

	.directive("oandwLinks", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/oandwlinks.html"
		};
	})
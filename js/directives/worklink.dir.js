angular
	.module('myStuff')

	.directive("workLink", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/worklink.html"
		};
	})

	.directive("d3mLinks", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/d3mlinks.html"
		};
	})

	.directive("oandwLinks", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/oandwlinks.html"
		};
	})

	.directive("rapidphireLinks", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/rapidphirelinks.html"
		};
	})

	.directive("amuseLinks", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/amuselinks.html"
		};
	})

	.directive("dymonLinks", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/dymonlinks.html"
		};
	})

	.directive("greenspaceLinks", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/greenspacelinks.html"
		};
	})

	.directive("vispolLinks", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/vispollinks.html"
		};
	})

	.directive("prototypeLinks", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/prototypelinks.html"
		};
	})

	.directive("websitesLinks", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/websiteslinks.html"
		};
	})
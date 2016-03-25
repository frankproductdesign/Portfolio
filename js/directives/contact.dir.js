angular
	.module('myStuff')

	.directive("contactMod", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/contact.html"
		};
	})
angular
	.module('myStuff')

	.directive("footerContent", function() {
		return {
			restrict: "E",
			templateUrl: "templates/directives/footer.html"
		};
	})

	.directive('menuToggle', function() {
		return function($scope, element, attrs) {

			$scope.isActive = false;

			$scope.openWindow = function() {
				$scope.isActive = !$scope.isActive;
			};
		};
	})
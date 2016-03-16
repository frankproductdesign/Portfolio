angular
	.module('myApp')

	.directive("scroll", function ($window) {
		return function($scope, element, attrs) {

		angular.element($window).bind("scroll",
				function() {

					// if (this.pageYOffset >= 44) {
					// 	$scope.hideIntro = true;
					// } else {
					// 	$scope.hideIntro = false;
					// }

					$scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;
// this toggles classes on different elements, opacity, position, etc.

				$scope.$apply();
			});

			// $scope.hideDetails = true;
		};
	})
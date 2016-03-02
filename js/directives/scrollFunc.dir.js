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
// this fixs the position of the top row to the top

				$scope.$apply();
			});

			// $scope.hideDetails = true;
		};
	})
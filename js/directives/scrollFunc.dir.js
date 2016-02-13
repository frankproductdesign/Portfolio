angular
	.module('myApp')

	.directive("scroll", function ($window) {
		return function($scope, element, attrs) {

		angular.element($window).bind("scroll",
				function() {

					if (this.pageYOffset >= 44) {
						$scope.hideIntro = true;
					} else {
						$scope.hideIntro = false;
					}

				$scope.$apply();
			});
		};
	})
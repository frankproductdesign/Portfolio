angular
	.module('myApp')

	.directive("scrollTrigger", function ($window) {
		return function($scope, element, attrs) {

		angular.element($window).bind("scroll",
				function() {

					// if (this.pageYOffset >= 44) {
					// 	$scope.hideIntro = true;
					// } else {
					// 	$scope.hideIntro = false;
					// }

					$scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;

				$scope.$apply();
			});
// this toggles classes on different elements

			// $scope.hideDetails = true;
		};
	})


	.directive("scrollOpacity", function ($window) {
		return function($scope, element, attrs) {

			var container = angular.element('.artContainer')
			var range = 200;

		angular.element($window).bind("scroll",
				function() {

					var scrollTop = $(this).scrollTop();
					var offset = container.offset().top;
					var height = container.outerHeight();
					offset = offset + height / 2;
					var calc = 1 - (scrollTop - offset + range) / range;

					container.css({ 'opacity': calc });

					if ( calc > '1' ) {
					  container.css({ 'opacity': 1 });
					} else if ( calc < '0' ) {
					  container.css({ 'opacity': 0 });
					}

				$scope.$apply();
			});
		};
	})
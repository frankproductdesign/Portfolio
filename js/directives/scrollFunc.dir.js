// angular
// 	.module('myApp')

// 	.directive("scroll", function ($window) {
// 		return function($scope, element, attrs) {

// 			var container = angular.element('.introtext')
// 			var range = 500;

// 		angular.element($window).bind("scroll",
// 				function() {

// 					var scrollTop = $(this).scrollTop();
// 					var offset = container.offset().top;
// 					var height = container.outerHeight();
// 					offset = offset + height / 2;
// 					var calc = 1 - (scrollTop - offset + range) / range;

// 					container.css({ 'opacity': calc });

// 					if ( calc > '1' ) {
// 					  container.css({ 'opacity': 1 });
// 					} else if ( calc < '0' ) {
// 					  container.css({ 'opacity': 0 });
// 					}

// 				$scope.$apply();
// 			});
// 		};
// 	})

(function() {
	'use strict';

	angular.module('myApp')
	.directive('navScroll', ['$window', function($window){
		return {
		restrict: 'A',
		link: function (scope, element) {
			var windowEl = angular.element($window);
			var delta = 20;
			var lastScrollTop = 0;

			windowEl.on('scroll', function () {
				var st = windowEl.scrollTop();

				if (Math.abs(lastScrollTop - st) <= delta) {
					return;
				}

				if (st > lastScrollTop)
					element.addClass('navbg-hidden');
				else
					element.removeClass('navbg-hidden');

				lastScrollTop = st;
				});
			}
		};
	}]);
})();
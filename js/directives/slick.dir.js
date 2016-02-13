angular
	.module('myStuff')

	.directive('slickCarousel', function($timeout) {
		return {
			restrict: "A",
			link: function(scope, element, attrs) {
				$timeout(function() {

					$(element).slick({
						dots: true,
						speed: 500
					});
				});
			}
		};
	})
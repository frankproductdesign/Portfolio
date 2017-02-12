angular
	.module('myStuff')

	.directive('slickCarousel', function($timeout) {

		return {
			restrict: "A",
			link: function(scope, element, attrs) {
				$timeout(function() {
					$(element).slick({
						autoplay: true,
						autoplaySpeed: 690,
						speed: 1700,
						dots: false,
						arrows: false,
						infinite: true,
						mobileFirst: true,
						fade: true,
						rows: 1,
						lazyload: 'progressive',
						draggable: false,
					});
					$(element).slick(scope.$eval(attrs.slickCarousel));
				});
			}
		};
	});
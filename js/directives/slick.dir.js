angular
	.module('myStuff')

	.directive('slickCarousel', function($timeout) {

		return {
			restrict: "A",
			link: function(scope, element, attrs) {
				$timeout(function() {
					$(element).slick({
						autoplay: true,
						autoplaySpeed: 36000,
						speed: 1500,
						dots: false,
						arrows: false,
						infinite: true,
						mobileFirst: true,
						rows: 1,
						lazyload: 'progressive',
						draggable: true,
					});
					$(element).slick(scope.$eval(attrs.slickCarousel));
				});
			}
		};
	});
angular
	.module('myStuff')

	.directive('slickCarousel', function($timeout) {

		return {
			restrict: "A",
			link: function(scope, element, attrs) {
				$timeout(function() {
					$(element).slick({
						autoplay: false,
						autoplaySpeed: 12000,
						speed: 3000,
						dots: false,
						arrows: false,
						infinite: true,
						mobileFirst: true,
						fade: true,
						rows: 1,
						lazyload: 'progressive',
						draggable: true,
					});
					$(element).slick(scope.$eval(attrs.slickCarousel));
				});
			}
		};
	});
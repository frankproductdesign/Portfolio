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
						// fade: true,
						// centerMode: true,
						// centerPadding: '90',
						// centerPadding is the side padding when in center mode. (px or %)

						responsive: [{
							breakpoint: 7000,
							// this breakpoint is coded backwards to sass, it include screen sizes downwards not upwards
								settings: {
									adaptiveHeight: false,
									slidesToShow: 1
								}

							}, {

							breakpoint: 1200,
								settings: {
									adaptiveHeight: true,
									slidesToShow: 1
								}

							}, {

							breakpoint: 319,
								settings: {
									adaptiveHeight: true,
									slidesToShow: 1
								}

							}, {

							breakpoint: 200,
								settings: "unslick" // destroys slick
						}]
					});
					$(element).slick(scope.$eval(attrs.slickCarousel));
				});
			}
		};
	});
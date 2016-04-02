angular
	.module('myStuff')

	.directive('slickCarousel', function($timeout) {
		return {
			restrict: "A",
			link: function(scope, element, attrs) {
				$timeout(function() {

					$(element).slick({
						speed: 500,
						// vertical: true
						// centerMode: true,
						// centerPadding: '18%',
						// centerPadding is the side padding when in center mode. (px or %)

						// the magic
						responsive: [{
							breakpoint: 4500,
							// this breakpoint is coded backwards to sass, it include screen sizes downwards not upwards
								settings: {
									adaptiveHeight: false,
									slidesToShow: 1,
									dots: true
								}

							}, {

							breakpoint: 760,
								settings: {
									adaptiveHeight: true,
									slidesToShow: 1,
									dots: true
								}

							}, {

							breakpoint: 200,
								settings: "unslick" // destroys slick
						}]
					});
				});
			}
		};
	})
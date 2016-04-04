angular
	.module('myStuff')

	// .directive('slickCarousel', function($timeout) {
	.directive('slickCarousel', function($interval) {

		return {
			restrict: "A",
			link: function(scope, element, attrs) {
				// $timeout(function() {
				$interval(function() {

					$(element).slick({
						speed: 500,
						// vertical: true
						// centerMode: true,
						// centerPadding: '18%',
						// centerPadding is the side padding when in center mode. (px or %)

						// the magic
						responsive: [{
							breakpoint: 7000,
							// this breakpoint is coded backwards to sass, it include screen sizes downwards not upwards
								settings: {
									adaptiveHeight: false,
									slidesToShow: 1,
									dots: true
								}

							}, {

							breakpoint: 1200,
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
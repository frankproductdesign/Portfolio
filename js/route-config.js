angular
	.module('myApp')

	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/recent', {
				templateUrl: 'templates/page1/index.html',
				controller: 'CtrlrOne',
				controllerAs: 'one'
			})
			.when('/previous', { 
				templateUrl: 'templates/page2/index.html',
				controller: 'CtrlrTwo',
				controllerAs: 'two'
			})
			.when('/code', { 
				templateUrl: 'templates/page3/index.html'
			})
			.when('/philosophy', { 
				templateUrl: 'templates/page4/index.html'
			})
			.when('/about', { 
				templateUrl: 'templates/page5/index.html'
			})

			.otherwise({ redirectTo: '/recent'
			});

	}]);
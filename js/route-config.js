angular
	.module('myApp')

	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/home', {
				templateUrl: 'templates/home/index.html',
				controller: 'CtrlrWork',
				controllerAs: 'work'
			})
			.when('/oliveandwell', { 
				templateUrl: 'templates/oliveandwell/index.html'
			})
			.when('/casm', { 
				templateUrl: 'templates/casm/index.html'
			})
			.when('/dymon', { 
				templateUrl: 'templates/dymon/index.html'
			})
			.when('/greenspace', { 
				templateUrl: 'templates/greenspace/index.html',
			})
			.when('/about', { 
				templateUrl: 'templates/about/index.html'
			})

			.otherwise({ redirectTo: '/home'
			});

	}]);
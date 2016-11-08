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
			.when('/greenspace1', { 
				templateUrl: 'templates/greenspace1/index.html',
			})
			.when('/greenspace2', { 
				templateUrl: 'templates/greenspace2/index.html',
			})
			.when('/prototypes', { 
				templateUrl: 'templates/prototypes/index.html',
			})
			.when('/print', { 
				templateUrl: 'templates/print/index.html',
			})
			.when('/about', { 
				templateUrl: 'templates/about/index.html'
			})

			.otherwise({ redirectTo: '/home'
			});

	}]);
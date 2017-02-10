angular
	.module('myApp')

	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/home', {
				templateUrl: 'templates/home/index.html',
				controller: 'CtrlrWork',
				controllerAs: 'work'
			})
			.when('/rapidphire', { 
				templateUrl: 'templates/rapidphire/index.html'
			})
			.when('/rapidphire1', { 
				templateUrl: 'templates/rapidphire1/index.html'
			})
			.when('/rapidphire2', { 
				templateUrl: 'templates/rapidphire2/index.html'
			})
			.when('/oliveandwell', { 
				templateUrl: 'templates/oliveandwell/index.html'
			})
			.when('/oliveandwell1', { 
				templateUrl: 'templates/oliveandwell1/index.html'
			})
			.when('/oliveandwell2', { 
				templateUrl: 'templates/oliveandwell2/index.html'
			})
			.when('/oliveandwell3', { 
				templateUrl: 'templates/oliveandwell3/index.html'
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
			.when('/websites', { 
				templateUrl: 'templates/websites/index.html'
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
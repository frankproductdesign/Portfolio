angular
	.module('myApp')

	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/home', {
				templateUrl: '/templates/home/index.html',
				controller: 'CtrlrWork',
				controllerAs: 'work'
			})
			.when('/d3m', { 
				templateUrl: 'templates/d3m/index.html'
			})
			.when('/rapidphire', { 
				templateUrl: 'templates/rapidphire/index.html'
			})
			.when('/sezlik', { 
				templateUrl: 'templates/sezlik/index.html'
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
			.when('/vispol', { 
				templateUrl: 'templates/vispol/index.html',
			})
			.when('/websites', { 
				templateUrl: 'templates/websites/index.html'
			})
			.when('/prototype', { 
				templateUrl: 'templates/prototype/index.html',
			})
			.when('/print', { 
				templateUrl: 'templates/print/index.html'
			})
			.when('/logos', { 
				templateUrl: 'templates/logos/index.html'
			})
			.when('/process', { 
				templateUrl: 'templates/process/index.html'
			})
			.when('/about', { 
				templateUrl: 'templates/about/index.html'
			})

			.otherwise({ redirectTo: '/home'
			});

	}]);
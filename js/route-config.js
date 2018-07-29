angular
	.module('myApp')

	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/home', {
				templateUrl: 'templates/home/index.html',
				controller: 'CtrlrWork',
				controllerAs: 'work'
			})
			.when('/d3m', { 
				templateUrl: 'templates/d3m/index.html'
			})
			.when('/rapidphire', { 
				templateUrl: 'templates/rapidphire/index.html'
			})
			.when('/oliveandwell', { 
				templateUrl: 'templates/oliveandwell/index.html'
			})
			.when('/casm', { 
				templateUrl: 'templates/casm/index.html'
			})
			.when('/casm1', { 
				templateUrl: 'templates/casm1/index.html'
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
			.when('/vispol', { 
				templateUrl: 'templates/vispol/index.html',
			})
			.when('/websites', { 
				templateUrl: 'templates/websites/index.html'
			})
			.when('/websites1', { 
				templateUrl: 'templates/websites1/index.html'
			})
			.when('/print', { 
				templateUrl: 'templates/print/index.html',
			})
			.when('/print1', { 
				templateUrl: 'templates/print1/index.html',
			})
			.when('/contact', { 
				templateUrl: 'templates/contact/index.html'
			})
			.when('/about', { 
				templateUrl: 'templates/about/index.html'
			})

			.otherwise({ redirectTo: '/home'
			});

	}]);
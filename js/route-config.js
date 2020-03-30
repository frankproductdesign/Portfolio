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
				templateUrl: 'templates/d3m/index.html',
				controller: 'CtrlrDate'
			})
			.when('/rapidphire', { 
				templateUrl: 'templates/rapidphire/index.html',
				controller: 'CtrlrDate'
			})
			.when('/sezlik', { 
				templateUrl: 'templates/sezlik/index.html',
				controller: 'CtrlrDate'
			})
			.when('/oliveandwell', { 
				templateUrl: 'templates/oliveandwell/index.html',
				controller: 'CtrlrDate'
			})
			.when('/casm', { 
				templateUrl: 'templates/casm/index.html',
				controller: 'CtrlrDate'
			})
			.when('/dymon', { 
				templateUrl: 'templates/dymon/index.html',
				controller: 'CtrlrDate'
			})
			.when('/greenspace', { 
				templateUrl: 'templates/greenspace/index.html',
				controller: 'CtrlrDate',
			})
			.when('/vispol', { 
				templateUrl: 'templates/vispol/index.html',
				controller: 'CtrlrDate',
			})
			.when('/websites', { 
				templateUrl: 'templates/websites/index.html',
				controller: 'CtrlrDate'
			})
			.when('/prototype', { 
				templateUrl: 'templates/prototype/index.html',
				controller: 'CtrlrDate',
			})
			.when('/print', { 
				templateUrl: 'templates/print/index.html',
				controller: 'CtrlrDate'
			})
			.when('/logos', { 
				templateUrl: 'templates/logos/index.html',
				controller: 'CtrlrDate'
			})
			.when('/process', { 
				templateUrl: 'templates/process/index.html',
				controller: 'CtrlrDate'
			})
			.when('/about', { 
				templateUrl: 'templates/about/index.html',
				controller: 'CtrlrDate'
			})

			.otherwise({ redirectTo: '/home'
			});

	}]);
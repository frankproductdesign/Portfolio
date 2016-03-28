angular
	.module('myApp')

	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/home', {
				templateUrl: 'templates/home/index.html',
			})
			.when('/recent', {
				templateUrl: 'templates/recent/index.html',
				controller: 'CtrlrRecent',
				controllerAs: 'recent'
			})
			.when('/past', { 
				templateUrl: 'templates/past/index.html',
				controller: 'CtrlrWork',
				controllerAs: 'work'
			})
			.when('/pastprint', { 
				templateUrl: 'templates/print/index.html'
				controller: 'CtrlrPrint',
				controllerAs: 'print'
			})
			.when('/code', { 
				templateUrl: 'templates/code/index.html'
			})
			.when('/approach', { 
				templateUrl: 'templates/approach/index.html'
			})
			.when('/about', { 
				templateUrl: 'templates/about/index.html'
			})

			.otherwise({ redirectTo: '/home'
			});

	}]);
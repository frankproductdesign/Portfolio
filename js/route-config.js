angular
	.module('myApp')

	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/home', {
				templateUrl: 'templates/page1/index.html',
			})
			.when('/recent', {
				templateUrl: 'templates/page2/index.html',
				controller: 'CtrlrOne',
				controllerAs: 'one'
			})
			.when('/past', { 
				templateUrl: 'templates/page3/index.html',
				controller: 'CtrlrTwo',
				controllerAs: 'two'
			})
			.when('/code', { 
				templateUrl: 'templates/page4/index.html'
			})
			.when('/approach', { 
				templateUrl: 'templates/page5/index.html'
			})
			.when('/about', { 
				templateUrl: 'templates/page6/index.html'
			})

			.otherwise({ redirectTo: '/home'
			});

	}]);
angular
	.module('myStuff', [])

	// $scope and $http after bracket protects this function from being messed up with minification, the bracket close at the bottom

	.controller('CtrlrCurrent', ['$scope', '$http', function ($scope, $http) {
		var list = this;
		list.items = []; //empty array so you don't get an error when the page initially loads
		$http.get('json/project1.json').success(function(data) {
			$scope.items = data;
		});
	}])
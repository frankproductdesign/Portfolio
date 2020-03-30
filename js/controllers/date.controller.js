angular.module('myStuff')

.controller('CtrlrDate', ['$scope', '$http', function ($scope, $http) {
		$scope.today = new Date();
}])
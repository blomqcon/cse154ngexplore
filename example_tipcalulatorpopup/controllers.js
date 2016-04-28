var tipControllers = angular.module('tipControllers', ['ngDialog']);

tipControllers.controller('TipCtrl', ['$scope', '$rootScope', 'ngDialog', function($scope, $rootScope, ngDialog) {
  $scope.total = "$0.00";
  $scope.badTip = false;

  $scope.calculate = function() {
    var total = (parseFloat($scope.sub) + (parseFloat($scope.sub) * (parseFloat($scope.tip) / 100)));
    $rootScope.total = "$" + total;
    $scope.badTip = ($scope.tip < 15);

    ngDialog.open({
        template: 'partials/calculateTip.html',
        controller: 'CalculateTipCtrl',
        data: { }
    });
  }
}]);

tipControllers.controller('CalculateTipCtrl', ['$scope', '$rootScope', 'ngDialog', function($scope, $rootScope, ngDialog) {
  //ngDialog has a method of passing data with ngDialog.open({data}), however I wanted to demonstrate $rootScope
  $scope.total = $rootScope.total;
	$scope.ok = function() {
		ngDialog.close();
	}
}]);
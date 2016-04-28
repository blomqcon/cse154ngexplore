var tipApp = angular.module('tipApp', []);

tipApp.controller('TipCtrl', ['$scope', function($scope) {
  $scope.total = "$0.00";
  $scope.badTip = false;

  $scope.calculate = function() {
    var total = (parseFloat($scope.sub) + (parseFloat($scope.sub) * (parseFloat($scope.tip) / 100)));
    $scope.total = "$" + total;
    $scope.badTip = ($scope.tip < 15);
  }
}]);
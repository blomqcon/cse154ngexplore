var hangmanApp = angular.module('hangmanApp', ['hangmanServices']);
	  

hangmanApp.controller('GameCtrl', ['$scope', 'getWordSvc', function($scope, getWordSvc) {
  $scope.makeGuess = function(guess) {
    if(guess) {
      if($scope.available.indexOf(guess) > -1) {
        $scope.available = $scope.available.replace(guess, " ");
        $scope.availableNoSpace = $scope.availableNoSpace.replace(guess, "");
        if($scope.word.indexOf(guess) > -1) {
          $scope.clue = $scope.word.replace(new RegExp("[" + $scope.available+ "]", "g"), "?");
          checkWin();
        } else {
          $scope.guesses -= 1;
          checkLose()
        }
      }
    }
    $scope.guess = "";
  }

  $scope.newGame = function() {
    $scope.guesses = 6;
    $scope.win = false;
    $scope.lose = false;
    $scope.guess = "";
    $scope.available = "abcdefghijklmnopqrstuvwxyz";
    $scope.availableNoSpace = "abcdefghijklmnopqrstuvwxyz";

    var wordPromise = getWordSvc();
    wordPromise.then(function(result) {
       $scope.word = result;
      $scope.clue = $scope.word.replace(/\w/g, "?");
    });
  }

  function checkWin() {
    if($scope.clue == $scope.word) {
      $scope.win = true;
    }
  }

  function checkLose() {
    if($scope.guesses == 0) {
      $scope.lose = true;
    }
  }

  $scope.newGame();
}]);
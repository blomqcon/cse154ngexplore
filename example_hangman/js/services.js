var hangmanServices = angular.module('hangmanServices', []);
hangmanServices.factory('getWordSvc', ["$http",function ($http) {

 var getWord = function() {
        return $http({method:"GET", url:"words.json"}).then(function(result){
			var words = result.data.words;
	        var word = words[Math.floor(Math.random()*words.length)];

  			return word;
        });
    };

    return getWord;	
}]);
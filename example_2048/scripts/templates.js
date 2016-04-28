angular.module("templates", [])
  .run(["$templateCache", function($templateCache) {
  $templateCache.put("gridId.html","<div class=\"grid-container\">\n    <div class=\"grid-cell\"\n         ng-repeat=\"cell in ngModel.grid track by $index\"></div>\n</div>\n<div class=\"tile-container\">\n    <div tile\n         ng-model=\"tile\"\n         ng-repeat=\"tile in ngModel.tiles track by $id(tile.id || $index)\"></div>\n</div>");
  $templateCache.put("tileId.html","<div ng-if=\"ngModel\" class=\"tile tile-{{ ngModel.value }} position-{{ ngModel.coordinate.x }}-{{ ngModel.coordinate.y }}\">\n    <div class=\"tile-inner\">\n        {{ ngModel.value }}\n    </div>\n</div>");
}]);
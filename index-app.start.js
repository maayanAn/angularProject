/**
 * Created by Jbt on 11/28/2016.
 */
angular.module('Index',[

])
.controller('MainCtrl', function ($scope) {
    $scope.categories = [
        {"id": 0, "name": "history"},
        {"id": 1, "name": "literature"},
        {"id": 2, "name": "chemistry"},
        {"id": 3, "name": "mathematics"}
    ];

    $scope.bookmarks = [
        {"id": 0, "title": "100 years ago",
            "category":$scope.categories[0].name},
        {"id": 1, "title": "Shakespeare",
            "category":$scope.categories[1].name},
        {"id": 2, "title": "atoms",
            "category":$scope.categories[2].name},
        {"id": 3, "title": "multiplication board",
            "category":$scope.categories[3].name}
    ];

    $scope.currentCategory = null;
    function setCurrentCategory(categotry) {
       $scope.currentCategory = categotry;
    }
    
    function isCurrentCategory(categoty) {
        return $scope.currentCategory !== null && categoty.name === $scope.currentCategory.name;
        
    }
    $scope.setCurrentCategory = setCurrentCategory;
    $scope.isCurrentCategory = isCurrentCategory;
});
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
        {
            "id": 0, "title": "100 years ago",
            "category": $scope.categories[0].name
        },
        {
            "id": 1, "title": "Shakespeare",
            "category": $scope.categories[1].name
        },
        {
            "id": 2, "title": "atoms",
            "category": $scope.categories[2].name
        },
        {
            "id": 3, "title": "multiplication board",
            "category": $scope.categories[3].name
        }
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

    function isCreating() {
        resetBookmark();
        return true;
    }

    function resetBookmark() {
        $scope.newBookmark = {
            title: '',
            category: $scope.currentCategory

        }

    }

    function createBookmark(bookmark) {
        bookmark.id = $scope.bookmarks.length;
        $scope.bookmarks.push(bookmark);

        resetBookmark();

    }

    $scope.isCreating = isCreating;
    $scope.createBookmark = createBookmark;
    $scope.editedBookmark = null;
    function setEditedBookmark(bookmark) {

        $scope.editedBookmark = angular.copy(bookmark);
    }

    function updateBookmark(bookmark) {
        var index = $scope.bookmarks.findIndex(function (b) {
            return b.id == bookmark.id;
        });
    $scope.bookmarks[index].title = bookmark.title;
    };

    function isSelectedBookmark(bookmarkId) {
        return $scope.editedBookmark !==null && $scope.editedBookmark.id === bookmarkId;

    }
    $scope.setEditedBookmark = setEditedBookmark;
    $scope.updateBookmark = updateBookmark;
    $scope.isSelectedBookmark = isSelectedBookmark;

    function deleteBookmark(bookmark) {
        _.remove($scope.bookmarks, function (b) {
            return b.id== bookmark.id;

        })
    }
    $scope.deleteBookmark = deleteBookmark;
});
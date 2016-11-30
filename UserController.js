/**
 * Created by Jbt on 11/30/2016.
 */
(function () {
    angular.module('users').controller('UserController', UserController);

    function UserController(userService, $mdSidenav, $mdButton) {
        var self = this;

        self.selected = null;
        self.users = [];
        self.selectUser = selectUser;
        self.toggleList = toggleUsersList;
        self.share = share;

        userService.loadAllUsers().then(function (users) {
            self.users = [].concat(users);
            self.selected = users[0];
        });

    }

    function toggleUsersList() {
        $mdSidenav('left').toggle();

    }

    function selectUser(user) {
        //self.select = angular.isNumber(user) ? $scope.users
        console.log('hello');

    }
});

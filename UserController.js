/**
 * Created by Jbt on 11/30/2016.
 */
(function () {
    angular.module('users').controller('UserController', UserController);

    function UserController(userService, $mdSidenav, $mdBottomSheet, $log) {
        var self = this;

        self.selected = null;
        self.users = [];
        self.selectUser = selectUser;
        self.toggleList = toggleUsersList;
        self.share = share;

        userService.loadAllUsers()
            .then(setUsers, error);

        function setUsers(users) {
            self.users = [].concat(users);
            self.selected = users[0];
        }

        function error(error) {
            console.log(error);
        }

        function toggleUsersList() {
            $mdSidenav('left').toggle();

        }

        function selectUser(user) {
            self.selected = user;
            console.log('hello');

        }

        function share(selectedUser) {
            $mdBottomSheet.show({
                controller: UserSheetController,
                controllerAs: 'vm',
                templateUrl: './bottomsheet.html',
                parent: angular.element(document.querySelector('#content'))
            });

            function UserSheetController() {
                this.user = selectedUser;
                this.items = [
                    {name: 'local_florist'},
                    {name: 'local_airport'},
                    {name: 'local_bar'},
                    {name: 'pets'},
                    {name: 'cloud_upload'}
                ];
                this.perforAction = function (action) {
                    $mdBottomSheet.hide();

                };
            }
        }
    }})();


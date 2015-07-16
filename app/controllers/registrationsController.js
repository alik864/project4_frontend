
    function RegistrationsController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.registrations = registrations;

        function registrations() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registrations successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });

        }
    }

 angular
        .module('profileApp')
        .controller('RegistrationsController', RegistrationsController);


    RegistrationsController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];

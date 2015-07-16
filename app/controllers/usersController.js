angular.module('profileApp').controller('UsersController', UsersController);

// ProfileController.$inject = [''];

function UsersController(){
  vm = this;
  this.user = {
    name: 'Ali',
    profession: 'Web Developer'
  }

}

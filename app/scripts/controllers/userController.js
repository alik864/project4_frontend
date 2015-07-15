angular.module('userApp').controller('UserController', UserController);

// ProfileController.$inject = [''];

function UserController(){
  vm = this;
  this.user = {
    name: 'Ali',
    profession: 'Web Developer'
  }

}

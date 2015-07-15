angular.module('profileApp').controller('ProfileController', ProfileController);

// ProfileController.$inject = [''];

function ProfileController(){
  vm = this;
  this.user = {
    name: 'Ali',
    profession: 'Web Developer'
  }

}

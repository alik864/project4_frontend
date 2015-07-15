angular.module('reviewApp').controller('ReviewController', ReviewController);

// ProfileController.$inject = [''];

function ReviewController(){
  vm = this;
  this.reviews = {
    name: 'Ali',
    profession: 'Web Developer'
  }

}

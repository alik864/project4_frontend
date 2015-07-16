

// ProfileController.$inject = [''];

function ReviewsController(){
  vm = this;
  this.reviews = {
    name: 'Ali',
    profession: 'Web Developer'
  }

}

angular.module('profileApp').controller('ReviewsController', ReviewsController);

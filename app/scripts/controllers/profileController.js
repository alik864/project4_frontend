
ProfileController.prototype.totalProfile = ƒ(profile){
    return this.profile.length;
  };

  ProfileController.prototype.oldestProfile = ƒ(){
    var candidateProfile = this.profile[0];

    this.profile.forEach(ƒ(profile){
      if (profile.user > candidateProfile.user) {
    candidateProfile = profile;
      }
    });

    return candidateProfile;
  };


angular.module('profileApp').controller('ProfileController', ProfileController);


function ProfileController(){
  vm = this;
  this.user = {
    name: 'Ali',
    summary: 'Ex. 10 years experience in web development'
    technologies: 'Ex. HTML, CSS, Rails'
    availability: 'Ex. Yes or No'
  }

}



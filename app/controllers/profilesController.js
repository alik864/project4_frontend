function ProfilesController($routeParams, profilesFactory){
  vm = this;
  vm.profile = profilesFactory.profile;
  var profileId = $routeParams.profileId;
  this.user = {
    name: 'Ali',
    summary: 'Ex. 10 years experience in web development',
    technologies: 'Ex. HTML, CSS, Rails',
    availability: 'Ex. Yes or No'
  }

  var init = function(){
    profilesFactory.getProfile(profileId).then(function(response){
      console.log(response);
    });
  };

  init();

}

ProfilesController.prototype.totalProfiles = function(profiles){
    return this.profiles.length;
  };

  ProfilesController.prototype.oldestProfiles = function(){
    var candidateProfiles = this.profiles[0];

    this.profiles.forEach(function(profile){
      if (profiles.user > candidateProfiles.user) {
    candidateProfiles = profiles;
      }
    });

    return candidateProfile;
  };

  ProfilesController.$inject = ['$routeParams', 'profilesFactory'];


angular.module('profileApp').controller('ProfilesController', ProfilesController);


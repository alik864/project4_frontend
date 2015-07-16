

(function profilesFactoryIIFE() {
  var profilesFactory = function($http) {
    var factory = {};
    factory.profiles = [];
    factory.profile = {};

    factory.getProfiles = function() {
      return $http.get('http://localhost:3000/profiles').success(function(response) {

        angular.copy(response.profiles, factory.profiles);
      });
    };

    factory.getProfile = function(profileId) {
      return $http.get('http://localhost:3000/profiles/' + profileId).success(function(response) {
        angular.copy(response, factory.profile);
      });
    };

    return factory;
  };

  profilesFactory.$inject = ['$http'];

  angular.module('profileApp').factory('profilesFactory', profilesFactory);

})();


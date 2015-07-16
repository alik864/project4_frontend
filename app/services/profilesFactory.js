

(function profilesFactoryIIFE() {
  var profilesFactory = function($http) {
    var factory = {};
    factory.profiles = [];
    factory.profiles = {};

    factory.getProfiles = function() {
      return $http.get('http://localhost:3000/profiles').success(function(response) {

        angular.copy(response.profiles, factory.profiles);
      });
    };

    factory.getProfiles = function(profilesId) {
      return $http.get('http://localhost:3000/profiles/' + profilesId).success(function(response) {
        angular.copy(response, factory.profiles);
      });
    };

    return factory;
  };

  profilesFactory.$inject = ['$http'];

  angular.module('profileApp').factory('profilesFactory', profilesFactory);

})();


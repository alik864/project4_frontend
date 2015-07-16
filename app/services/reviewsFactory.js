
(function reviewsFactoryIIFE() {
  var reviewsFactory = function($http) {
    var factory = {};
    factory.reviews = [];
    factory.reviews = {};

    factory.getReviews = function() {
      return $http.get('http://localhost:3000/reviews').success(function(response) {

        angular.copy(response.reviews, factory.reviews);
      });
    };

    factory.specificReviews = function(reviewsId) {
      return $http.get('http://localhost:3000/reviews/' + reviewsId).success(function(response) {
        angular.copy(response, factory.reviews);
      });
    };

    return factory;
  };

  reviewsFactory.$inject = ['$http'];

  angular.module('profileApp').factory('reviewsFactory', reviewsFactory);

})();


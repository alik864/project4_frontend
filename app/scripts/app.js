var app = angular.module('profileApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/profile', {
    templateUrl: 'views/profile.html',
    controller: ProfileController,
    controllerAs: 'profileCtrl'
  }).otherwise({
    redirectTo: '/'
  });


}]);

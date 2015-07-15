var app = angular.module('profileApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/profile', {
    //profile route
    templateUrl: 'views/profile.html',
    controller: ProfileController,
    controllerAs: 'profileCtrl'
    // user route
    .when('/user', {
    templateUrl: 'views/user.html',
    controller: UserController,
    controllerAs: 'userCtrl'
    //review route
    .when('/review', {
    templateUrl: 'views/review.html',
    controller: ReviewController,
    controllerAs: 'reviewCtrl'
    //Registration route
    .when('/registration', {
    templateUrl: 'views/registration.html',
    controller: RegistrationController,
    controllerAs: 'registrationCtrl'
     //Do Register
    .when('/doregistration', {
    templateUrl: 'views/doregistration.html',
    controller: RegistrationController,
    controllerAs: 'registrationCtrl'

  }).otherwise({
    redirectTo: '/login'
  });

}]);







app.config(['$routeProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/profile', {
    //profile route
    templateUrl: 'views/profile.html',
    controller: ProfilesController,
    controllerAs: 'profileCtrl'
    })
    // user route
    .when('/user', {
    templateUrl: 'views/user.html',
    controller: UsersController,
    controllerAs: 'userCtrl'
    })
    //review route
    .when('/review', {
    templateUrl: 'views/review.html',
    controller: ReviewsController,
    controllerAs: 'reviewCtrl'
    })
    //Registration route
    .when('/registrations', {
    templateUrl: 'views/registration.html',
    controller: RegistrationsController,
    controllerAs: 'registrationsCtrl'
    })
     //Do Register
    .when('/doregistration', {
    templateUrl: 'views/doregistration.html',
    controller: RegistrationsController,
    controllerAs: 'registrationsCtrl'

  }).otherwise({
    redirectTo: '/login'
  });

}]);

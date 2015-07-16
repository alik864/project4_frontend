
app.config(['$routeProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/profiles/:profileId', {
    //profile route
    templateUrl: 'app/views/profile.html',
    controller: ProfilesController,
    controllerAs: 'profileCtrl'
    })
    // user route
    .when('/user', {
    templateUrl: 'app/views/user.html',
    controller: UsersController,
    controllerAs: 'userCtrl'
    })
    //review route
    .when('/review', {
    templateUrl: 'app/views/review.html',
    controller: ReviewsController,
    controllerAs: 'reviewCtrl'
    })
    //Registration route
    .when('/registrations', {
    templateUrl: 'app/views/registration.html',
    controller: RegistrationsController,
    controllerAs: 'registrationsCtrl'
    })
     //Do Register
    .when('/doregistration', {
    templateUrl: 'app/views/doregistration.html',
    controller: RegistrationsController,
    controllerAs: 'registrationsCtrl'

  }).otherwise({
    redirectTo: '/profileyes'
  });

}]);

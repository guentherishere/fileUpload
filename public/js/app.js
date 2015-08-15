var app = angular.module('fileUploader', ['ngRoute']);

app.config(function ($routeProvider) {

  $routeProvider

    .when('/', {
    templateUrl: "templates/home.html",
    controller: "homeCtrl"
  })

  .when('/authenticated', {
    templateUrl: "templates/authenticated.html",
    controller: "authenticatedCtrl"
  })

  .when('/add', {
    templateUrl: "templates/addFile.html",
    controller: "adminCtrl"
  })

  // .when('/edit/:id', {
  //   templateUrl: "templates/editProduct.html",
  //   controller: "editCtrl"
  // })

  .otherwise({
    redirectTo: '/'
  });

});

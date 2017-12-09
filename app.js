var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    
    $routeProvider
    .when("/", {
        templateUrl : "./index.html"
    })
    .when("/login", {
        templateUrl : "./pages/login.html"
    })
    .when("/configure", {
        templateUrl : "./pages/configure-account.html"
    })
    .when("/post-login", {
        templateUrl : "./pages/post-login.html"
    })
    .when("/register", {
        templateUrl : "./pages/register.html"
    })
    .otherwise({
        templateUrl: "./pages/login.html"
    })
});
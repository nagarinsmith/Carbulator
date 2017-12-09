var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    
    $routeProvider
    .when("/", {
        templateUrl : "./pages/post-login.html"
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
    .when("/chart", {
        templateUrl : "./pages/chart.html"
    })
    .when("/calculate", {
        templateUrl : "./pages/calculator.html"
    })
    .otherwise({
        templateUrl : "./pages/not-found.html"
    })
});
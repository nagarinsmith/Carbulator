var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    
    $routeProvider
    .when("/", {
        templateUrl : "./pages/login.html"
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
    .when("/add-glic", {
        templateUrl : "./pages/add-values.html"
    })
    .when("/drj",{
        templateUrl : "./drjn_style42/styleCalc.html"
    })
    /*.otherwise({
        templateUrl : "./pages/not-found.html"
    })*/
});
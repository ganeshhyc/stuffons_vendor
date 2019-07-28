app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'application/view/landing.html'
    })
    .when('/profile',{
        templateUrl : 'application/view/profile.html'
    })
    .when('/otp-signup',{
        templateUrl : 'application/view/register/signup_otp.html'
    })
    .when('/empty',{
        templateUrl : 'application/view/empty.html'
    })
    .otherwise({
        redirectTo : '/'
    })

})
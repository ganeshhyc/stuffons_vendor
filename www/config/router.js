app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'application/view/landing.html'
    })
    .when('/onboarding',{
        templateUrl : 'application/view/register/onboarding_login_signup_button.html'
    })
    .when('/profile',{
        templateUrl : 'application/view/profile.html'
    })
    .when('/signup',{
        templateUrl : 'application/view/register/signup.html'
    })
    .when('/otp-signup',{
        templateUrl : 'application/view/register/signup_otp.html'
    })
    .when('/select-type',{
        templateUrl : 'application/view/select_business_module.html'
    })
    .when('/empty',{
        templateUrl : 'application/view/empty.html'
    })
    .otherwise({
        redirectTo : '/'
    })

})
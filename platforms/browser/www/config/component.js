app.directive('navbar',function(){
    return {
        templateUrl : '../application/component/navbar.html',
        scope : {
            navbarvar : '='
        }
    }
});
app.directive('round',function(){
    return {
        templateUrl : '../application/component/round_img.html',
        scope : {
            imageurl : '='
        }
    }
});
app.directive('curve',function(){
    return {
        templateUrl : '../application/component/img_300_curve_edge.html',
        scope : {
            imageurl : '='
        }
    }
});
app.directive('qr',function(){
    return {
        templateUrl : '../application/component/qr_code.html',
        scope : {
            hash : '='
        }
    }
});

app.directive('menu',function(){
    return {
        templateUrl : '../application/component/menu_location_review_statistics.html',
        scope : {
            components : '='
        }
    }
});

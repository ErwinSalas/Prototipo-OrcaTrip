/**
 * Created by Erwin on 25/10/2016.
 */
angular.module('mainModule',["ngRoute"])
.config(['$routeProvider',function($routeProvider)
    {
        $routeProvider.when("/main",{
            templateUrl:'dashboard.html',
            controller: 'dashboardCtrl'
        })
        .when("/map",{
            templateUrl:'Maps/map.html',
            controller: 'mapCtrl'
        })

        
    }
]);

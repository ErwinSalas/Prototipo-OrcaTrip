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
        .when("/avistamiento",{
            templateUrl:'Avistamientos/avistamientos.html',
            controller: 'avistamientosCtrl'
        })
        .when("/avistamiento/crear",{
            templateUrl:'Avistamientos/create.html',
            controller: 'crearController'
        })



    }
]);

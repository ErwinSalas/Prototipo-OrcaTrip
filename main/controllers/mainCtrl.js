/**
 * Created by Erwin on 26/10/2016.
 */

angular.module('mainModule')
    .controller('mainCtrl', function($scope,$location) {
    /* config object */

       /* var usuario = JSON.parse(sessionStorage.getItem("user"));

        $scope.user = usuario.name;
        $scope.email= usuario.email;*/
        $scope.user = "Código Rojo";
        $scope.email = "OrcaTrip";
        window.location.href = ('#/user');


});
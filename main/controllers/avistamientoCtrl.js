/**
 * Created by Pavilion on 30/4/2017.
 */
angular.module('mainModule')
    .controller('avistamientosCtrl', function($scope) {
        $scope.avistamientos= [
            {
                latitud: 48.553352,
                longitud: -125.086479,
                cantidadIndividuos: 40,
                tipo: "residentes",
                supTipo: "A"
            },
            {
                latitud: 50.817163,
                longitud: -128.621048,
                cantidadIndividuos: 40,
                tipo: "Maritima",
                supTipo: "C"
            },
            {
                latitud: 73.292133,
                longitud: -73.454771,
                cantidadIndividuos: 40,
                tipo: "Transeuntes",
                supTipo: "B"
            }
        ];

    });
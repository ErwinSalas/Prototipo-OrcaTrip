/**
 * Created by Pavilion on 30/4/2017.
 */
angular.module('mainModule')
    .controller('areasCtrl', function($scope) {
        $scope.avistamientos= [
            {
                latitud: 48.553352,
                longitud: -125.086479,
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 500
            },
            {
                latitud: 50.817163,
                longitud: -128.621048,
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 500
            },
            {
                latitud: 73.292133,
                longitud: -73.454771,
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 500
            }
        ];
        var mymap =  L.map('mapid',{attributionControl: false})
            .setView([48.553352, -125.086479], 2);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);



        $scope.init=function () {
            console.log("entro")
            for (var i= 0;i< $scope.avistamientos.length;i++ ){
                console.log( $scope.avistamientos[i]);
                var circle = L.circle([element[i].latitud, element[i].longitud], {
                    color: element[i].color,
                    fillColor: element[i].fillColor,
                    fillOpacity: element[i].fillOpacity,
                    radius: element[i].radius
                }).addTo(mymap);
            }


        }

    });

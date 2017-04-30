/**
 * Created by Pavilion on 30/4/2017.
 */
angular.module('mainModule')
    .controller('areasCtrl', function($scope) {
        $scope.poligons= [
            {
                latitud: 48.553352,
                longitud: -125.086479,
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 105000
            },
            {
                latitud: 50.817163,
                longitud: -128.621048,
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 105000
            },
            {
                latitud: 73.292133,
                longitud: -73.454771,
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 105000
            }
        ];
        var mymap =  L.map('mapid',{attributionControl: false})
            .setView([48.553352, -125.086479], 2);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);



        $scope.init=function () {
            console.log("entro")
            for (var i= 0;i< $scope.poligons.length;i++ ){
                console.log( $scope.poligons[i]);
                var circle = L.circle([$scope.poligons[i].latitud, $scope.poligons[i].longitud], {
                    color: $scope.poligons[i].color,
                    fillColor: $scope.poligons[i].fillColor,
                    fillOpacity: $scope.poligons[i].fillOpacity,
                    radius: $scope.poligons[i].radius
                }).addTo(mymap);
            }


        }

    });

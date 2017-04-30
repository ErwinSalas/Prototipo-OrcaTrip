/**
 * Created by Pavilion on 30/4/2017.
 */
angular.module('mainModule')
    .controller('mapCtrl', function($scope) {
        var avistamientos= [
            {
                latitud: 48.553352,
                longitud: -125.086479,
                cantidadIndividuos: 20,
                tipo: "residentes",
                supTipo: "A"
            },
            {
                latitud: 50.817163,
                longitud: -128.621048,
                cantidadIndividuos: 70,
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
        var mymap =  L.map('mapid',{attributionControl: false})
            .setView([48.553352, -125.086479], 5);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);

        var Icon = L.icon({
            iconUrl: '../../assets/images/user.png',

            iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        function onMapClick(e) {
            marker = new L.marker(e.latlng, { icon:Icon, draggable:'true'});
            mymap.addLayer(marker);
        }

        mymap.on('click', onMapClick);
    });
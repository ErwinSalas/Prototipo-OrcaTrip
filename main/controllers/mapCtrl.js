/**
 * Created by Pavilion on 30/4/2017.
 */
angular.module('mainModule')
    .controller('mapCtrl', function($scope) {
        var mymap =  L.map('mapid',{attributionControl: false})
            .setView([51.505, -0.09], 20);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);
    });
﻿angular.module('resultMapCtrl', [])

.controller('MapPropertiesCtrl', function ($scope, $ionicLoading) {
    $scope.listbiens = [
      { title: 'Bien1', id: 1, img: "http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg", resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien2', id: 2, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien3', id: 3, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien4', id: 4, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien5', id: 5, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' },
      { title: 'Bien6', id: 6, img: 'http://www.abritel.fr/info/files/shared/banniere/guide/idees-vacances/divers/location-appartement.jpg', resume: 'Quam brevi appellatur hoc amicorum.' }
    ];
    $scope.init = function () {
        var mapDiv = document.getElementById("mapCanvas")
        var latlng = new google.maps.LatLng(46.779231, 6.659431);
        //objet contenant des propriétés avec des identificateurs prédéfinis dans Google Maps permettant
        //de définir des options d'affichage de notre carte
        var options = {
            center: latlng,
            zoom: 19,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapDiv, options)

        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log('dsqqdoskqsdkqopdkazdn,anaù')
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
        $scope.mapCanvas = map
         
    }
    $scope.init();

})
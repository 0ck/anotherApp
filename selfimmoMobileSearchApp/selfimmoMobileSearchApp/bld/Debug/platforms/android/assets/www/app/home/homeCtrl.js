angular.module('homeCtrl', ['ngAnimate'])

.controller('HomeCtrl', function ($scope) {
    $scope.scrollUp = function () {
        footer = document.getElementById("footer-bar")
        .animation('footer', function() {
            footer.style.height = '500px';
        })
    };
})
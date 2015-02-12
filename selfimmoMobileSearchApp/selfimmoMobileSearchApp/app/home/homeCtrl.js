angular.module('homeCtrl', ['ngAnimate'])

.controller('HomeCtrl', function ($scope) {
    $scope.scrollUp = function () {
        footer = document.getElementById("footer-bar")
        $scope.animation('footer', function() {
            footer.style.height = '500px';
        })
    };
})
angular.module('searchCtrl', [])

.controller('SearchCtrl', function($scope, $state) {
    $scope.rechercheData = {};
    $scope.rechercher = function(){
        // angular.forEach($scope.rechercheData, function (value, key) {
        //      $scope.key = $scope.value;
        //      alert('Doing login', $scope.key);
        // });
        $state.go('app.listproperties');
    }
})
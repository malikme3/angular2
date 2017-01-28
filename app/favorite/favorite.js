'use strict';

angular.module('myApp.favorite', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/favorite', {
    templateUrl: 'favorite/favorite.html',
    controller: 'FavoriteCtrl'
  });
}])

.controller('FavoriteCtrl', ['dataStoreService','$rootScope', '$scope', function(dataStoreService, $rootScope, $scope) {
    var vm = this;
    vm.name = "shailesh";
    vm.favData = [];
    
    $rootScope.$watch(function () { return dataStoreService.getFavorite() }, function (obj) {
        vm.favData = obj;
    });
    
    vm.updateFav = function (acc) {
        for (var i =0; i< vm.favData.length ; i++) {
            if (vm.favData[i].accId == acc.accId) {
                if (vm.favData[i].favorite == true) {
                    vm.favData[i].favorite = false;
                    dataStoreService.updateFavorite(vm.favData[i]);
                } else {
                    vm.favData[i].favorite = true;
                    dataStoreService.setFavorite(vm.favData[i]);
                }
            }
        };
    };
}]);
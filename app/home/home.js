'use strict';

angular.module('myApp.home', ['ngRoute'])
.controller('HomeCtrl', HomeCtrl)
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}]);


HomeCtrl.$inject = ['dataStoreService','$rootScope'];
function HomeCtrl (dataStoreService, $rootScope){
  var vm = this;
  vm.homeData = [];

  vm.$onInit = function () {
      dataStoreService.getHomeData().then( function (response) {
          vm.homeData = response;
      });
  };

  vm.favorite = function (acc) {
      for (var i =0; i< vm.homeData.length ; i++) {
          if (vm.homeData[i].accId == acc.accId) {
              if (vm.homeData[i].favorite == true) {
                  vm.homeData[i].favorite = false;
                  dataStoreService.updateFavorite(vm.homeData[i]);
              } else {
                  vm.homeData[i].favorite = true;
                  dataStoreService.setFavorite(vm.homeData[i]);
              }
          }
      };
  };


}

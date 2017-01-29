'use strict';

angular.module('myApp.data-store.data-store-service', [])
    .service('dataStoreService', dataStoreService);



dataStoreService.$inject = ['$http', '$q', '$rootScope'];

function dataStoreService($http, $q, $rootScope) {
    var service = {};

    service.data = [];
    service.fav = [];
    service.megaMenu = [];

    service.getHomeData = function() {
        return $q(function(resolve, reject) {
            if (service.data.length > 0) {
                resolve(service.data);
            } else {
                var promise = getAccountsList();
                promise.then(function(response) {
                    setData(response.data.accounts);
                    setMegaMenu(response.data.accounts);
                    resolve(response.data.accounts);
                });
            }
        });
    };

    function getAccountsList() {
        var deferred = $q.defer();

        $http({
            'url': '../model/demo.json',
            'method': 'GET'
        }).then(function successCallback(response) {
            deferred.resolve(response);
        }, function errorCallback(response) {
            deferred.reject(response.error);
        });
        return deferred.promise;
    };

    function setData(data) {
        for (var i = 0; i <= data.length; i++) {
            service.data.push(data[i]);
        }
    };

    service.setFavorite = function(acc) {
        service.fav.push(acc);
    };

    service.getFavorite = function() {
        return service.fav;
    };

    service.getMegaMenu = function() {
        if (service.fav.length > 0) {
            return service.fav;
        } else {
            return service.megaMenu;
        }
    };

    function setMegaMenu(data) {
        for (var i = 0; i <= 6; i++) {
            service.megaMenu.push(data[i]);
        }
    };

    service.updateFavorite = function(acc) {
        for (var i = 0; i < service.fav.length; i++) {
            if (service.fav[i].accId == acc.accId) {
                service.fav.splice(i, 1);
            }
        }
    };

    return service;
};

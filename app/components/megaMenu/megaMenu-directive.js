'use strict';

angular.module('myApp.megaMenu.megaMenu-directive', [])
    .directive('megaMenu', megaMenu)
    .component('tableComponent', {

        templateUrl: 'components/shared/table.html',
        controller: tableComponentController,
        bindings: {
            //value="fav"  id="fav_btn" type="button" ng-click="fav.updateFav(favData)
            accountList: '<',
            value: '@',
            accId: '@',
            type: '@',
            onRemove: '&'
        }


    });

function tableComponentController (){
  var $ctrl = this;

  $ctrl.accSum = list.favData;
}

megaMenu.$inject = ['dataStoreService', '$rootScope'];

function megaMenu(dataStoreService, $rootScope) {

    return {
        scope: {},
        bindToController: {
            message: '='
        },
        controller: function() {
            var vm = this;

            vm.megaMenuData = [];

            $rootScope.$watch(function() {
                return dataStoreService.getMegaMenu()
            }, function(obj) {
                vm.megaMenuData = obj;
            });
        },
        controllerAs: 'ctrl',
        templateUrl: 'components/megaMenu/megaMenu_directive.html',

    }
};

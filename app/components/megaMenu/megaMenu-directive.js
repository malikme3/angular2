'use strict';

angular.module('myApp.megaMenu.megaMenu-directive', [])
.directive('megaMenu', ['dataStoreService','$rootScope', function(dataStoreService, $rootScope){
    return {
        scope: {},
        bindToController: {
            message: '='
        },
        controller: function() {
            var vm = this;
            
            vm.megaMenuData = [];
            
            $rootScope.$watch(function () { return dataStoreService.getMegaMenu() }, function (obj) {
                vm.megaMenuData = obj;
            });
        },
        controllerAs: 'ctrl',
        templateUrl: 'components/megaMenu/megaMenu_directive.html',
//        link: function (scope, element, attrs, controller) {
//            scope.megaMenuData = [];
//            
//            $rootScope.$watch(function () { return dataStoreService.getMegaMenu() }, function (obj) {
//                for (var i =0; i < obj.length ; i++) {
//                    if (obj.favorite == true) {
//                        scope.megaMenuData = obj;
//                    }
//                }
//             scope.megaMenuData = obj;
//            });
//            
//        }
    }
}]);
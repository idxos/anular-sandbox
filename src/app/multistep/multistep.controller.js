(function() {
    'use strict';

    angular
        .module('app.miltistep')
        .controller('MultistepController', MultistepController);

    MultistepController.$inject = ['$scope'];

    /* @ngInject */
    function MultistepController($scope) {
        var vm = this;
        vm.title = 'MultistepController';



          
          $scope.groups = [
            {
              title: "Dynamic Group Header - 1",
              content: "Dynamic Group Body - 1",
              open: false
            },
            {
              title: "Dynamic Group Header - 2",
              content: "Dynamic Group Body - 2",
              open: false
            }
          ];
          
          $scope.$watch('groups', function(groups){
            angular.forEach(groups, function(group, idx){
              if (group.open) {
                console.log("Opened group with idx: "+idx);
              }
            })   
          }, true);










    }
})();
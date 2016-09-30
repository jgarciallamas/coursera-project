(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  //Variables
  $scope.message = "";
  $scope.class = "";

  //Functions
  $scope.processFood = function(){
    var aliments = $scope.food.split(",");

    if(aliments.length == 1){
      $scope.message = 'Please enter data first';
      $scope.class = "alert-warning";
    }//if

    else if (aliments.length<=3) {
      // console.log('Enjoy!');
      $scope.message = 'Enjoy!';
      $scope.class = "alert-success";
    }//else if
    else{
      $scope.message = 'Too much!';
      $scope.class = "alert-danger";
    }//else

    for (var i = 0; i < aliments.length; i++) {
      if((aliments[i] == '') && (i < aliments.length-1)){
        $scope.message = 'empty item'
        $scope.class = "alert-info";
      }//if
    }//for

  }//processFood function

} //LunchCheckController function

})(); //IIFE

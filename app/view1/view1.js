'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl as store'
  });
}])

.controller('View1Ctrl', [function() {
  this.products = [{
    name: "Macbook Air",
    description: "11 inch notebook",
    price: 799,
    canPurchase: false
  },
  {
    name: "Macbook Pro",
    description: "13 inch notebook",
    price: 1099,
    canPurchase: false
  }]

  this.buy = function(product){
    console.log(product)
  }
}]);
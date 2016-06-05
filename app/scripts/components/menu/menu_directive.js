'use strict';

angular.module('angular15App', [])
  .directive('menu', function() {
	  return {
	  	  scope: {},
	      controller: MenuCtrl,
	      controllerAs: 'menuCtrl',
	      templateUrl: 'scripts/components/menu/menu.html'
	  };
  });


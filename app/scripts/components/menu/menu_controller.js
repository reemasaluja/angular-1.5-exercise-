'use strict';

function MenuCtrl() {
	var ctrl = this;
	ctrl.name= 'Reema1';
	ctrl.setitems = ['Home','Contact Us','About Us'];
}

angular.module('angular15App').controller('MenuCtrl', MenuCtrl);
angular.module('bancaalamano.controllers', ['ionic'])
	
	.controller('SignInCtrl', function($scope, $state) {
		  $scope.signIn = function(user) {
		    console.log('Sign-In', user);
		    if(user != undefined) {
		    	$state.go('tab.transactions');	
		    }
		    else {
		    	alert('Por Favor Ingrese su Usuario y Contraseña');
		    	/*
		    	$ionicPopup.alert({
	              title: 'Datos Incompletos',
	              content: 'Por Favor Ingrese su Usuario y Contraseña'
	            }).then(function(res) {
	              console.log('No ingresó datos de login');
	            });
*/
		    }
		    
		  };
	})
;

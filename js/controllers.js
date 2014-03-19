angular.module('bancaalamano.controllers', ['ionic'])
	//Controlador encargado de el Logon de usuario
	.controller('SignInCtrl', function($scope, $state) {
		  $scope.signIn = function(user) {
		    console.log('Sign-In', user);
		    if(user != undefined) {
		    	$state.go('tab.transactions');	
		    }
		    else {
		    	alert('Por Favor Ingrese su Usuario y Contraseña');
		    	//TODO Investigar porque no funciona el ionicPopup
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
	// Controlador que obtiene los datos de saldo de un cliente
	.controller('BalanceCtrl', function($scope, ConsultaSaldoService) {
	  // ConsultaSaldoService servicio que invoca REST de consulta de Saldo (services.js)
	  	console.log("invocando servicio..");
		$scope.consultaSaldo = ConsultaSaldoService.query();
		$scope.consultaSaldo.$promise.then(
			function (result) {
				console.log(JSON.stringify(result));
				var resultado = result.BalInqRs;
			    $scope.saldo = resultado[0].Amt;
			},
			function( error ){
				console.log(JSON.stringify(error));
				$scope.saldo = 0.00;//2006330.50;
			}
		);
	})
;

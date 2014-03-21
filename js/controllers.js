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
		    	/*$ionicPopup.alert({
	              title: 'Datos Incompletos',
	              content: 'Por Favor Ingrese su Usuario y Contraseña'
	            }).then(function(res) {
	              console.log('No ingresó datos de login');
	            });*/
			}
		  };
	})
	// Controlador que obtiene los datos de saldo de un cliente
	.controller('BalanceCtrl', ['$scope', '$ionicLoading', 'ConsultaSaldoService', '$ionicModal', function($scope, $ionicLoading, ConsultaSaldoService, $ionicModal) {
	  // ConsultaSaldoService servicio que invoca REST de consulta de Saldo (services.js)
	  	console.log("invocando servicio..");
	  	$scope.loading = $ionicLoading.show({
		      // The text to display in the loading indicator
		      content: 'Cargando...',
		      // The animation to use
		      animation: 'fade-in',
		      // Will a dark overlay or backdrop cover the entire view
		      showBackdrop: true,
		      // The maximum width of the loading indicator
		      // Text will be wrapped if longer than maxWidth
		      maxWidth: 200,
		      // The delay in showing the indicator
		      showDelay: 500
		});
		$scope.consultaSaldo = ConsultaSaldoService.query();
		$scope.consultaSaldo.$promise.then(
			function (result) {
				console.log(JSON.stringify(result));
				var resultado = result.BalInqRs;
			    $scope.saldo = resultado[0].Amt;
			    var el = document.getElementById("saldoLoader");
				el.style.display = (el.style.display == 'none') ? 'block' : 'none';
				$scope.loading.hide();
				$scope.mensaje = "";
			},
			function( error ){
				console.log(JSON.stringify(error));
				$scope.saldo = "120.000";
				var el = document.getElementById("saldoLoader");
				el.style.display = (el.style.display == 'none') ? 'block' : 'none';
				$scope.loading.hide();
				$scope.mensaje = "";
			}
		);
		$ionicModal.fromTemplateUrl('share.html', function(modal) {
		    $scope.modal = modal;
		}, {
		    scope: $scope,
		    animation: 'slide-in-up'
		});
		$scope.openModal = function() {
		    $scope.modal.show();
		};
		$scope.closeModal = function() {
		    $scope.modal.hide();
		};
		$scope.$on('$destroy', function() {
		    $scope.modal.remove();
		});
	}])

	.controller('GenericCtrl', function($scope, $ionicModal, $state) {
	   	  
	   	  $scope.enviarDinero = function() {
		  	console.log("invocando servicio de envio de dinero..");
		  	alert("La transacción fue realizada con éxito.");
		  	$state.go('tab.transactions');
		  };

		  $ionicModal.fromTemplateUrl('share.html', function(modal) {
		    $scope.modal = modal;
		  }, {
		    scope: $scope,
		    animation: 'slide-in-up'
		  });
		  $scope.openModal = function() {
		    $scope.modal.show();
		  };
		  $scope.closeModal = function() {
		    $scope.modal.hide();
		  };
		  $scope.$on('$destroy', function() {
		    $scope.modal.remove();
		  });
	 })
;


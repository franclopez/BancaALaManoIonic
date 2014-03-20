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
	.controller('BalanceCtrl', ['$scope', '$ionicLoading', 'ConsultaSaldoService', function($scope, $ionicLoading, ConsultaSaldoService) {
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
				$scope.saldo = "";
				var el = document.getElementById("saldoLoader");
				el.style.display = (el.style.display == 'none') ? 'block' : 'none';
				$scope.loading.hide();
				$scope.mensaje = "Problemas de Comunicación. Por Favor Intente Más Tarde.";
			}
		);
	}])

	.controller('SendMoneyCtrl', function($scope, $state) {
	   $scope.enviarDinero = function() {
	  	console.log("invocando servicio de envio de dinero..");
	  	$state.go('tab.transactions');	
	  };
	 })

	.controller('PopupCtrl', function($scope, $timeout, $q, $ionicPopup) {
          $scope.showPopup = function() {
            $scope.data = {}

            $ionicPopup.show({
              templateUrl: 'popup-template.html',
              title: 'Enter Wi-Fi Password',
              subTitle: 'WPA2',
              scope: $scope,
              buttons: [
                { text: 'Cancel', onTap: function(e) { return true; } },
                {
                  text: '<b>Save</b>',
                  type: 'button-positive',
                  onTap: function(e) {
                    return $scope.data.wifi;
                  }
                },
              ]
              }).then(function(res) {
                console.log('Tapped!', res);
              }, function(err) {
                console.log('Err:', err);
              }, function(msg) {
                console.log('message:', msg);
              });

            $timeout(function() {
              $ionicPopup.alert({
                title: 'Unable to connect to network'
              }).then(function(res) {
                console.log('Your love for ice cream:', res);
              });
            }, 1000);
          };

          $scope.showConfirm = function() {
            $ionicPopup.confirm({
              title: 'Consume Ice Cream',
              content: 'Are you sure you want to eat this ice cream?'
            }).then(function(res) {
              if(res) {
                console.log('You are sure');
              } else {
                console.log('You are not sure');
              }
            });
          };
          $scope.showPrompt = function() {
            $ionicPopup.prompt({
              title: 'ID Check',
              subTitle: 'What is your name?'
            }).then(function(res) {
              console.log('Your name is', res);
            });
          };
          $scope.showPasswordPrompt = function() {
            $ionicPopup.prompt({
              title: 'Password Check',
              subTitle: 'Enter your secret password',
              inputType: 'password',
              inputPlaceholder: 'Your password'
            }).then(function(res) {
              console.log('Your name is', res);
            });
          };
          $scope.showAlert = function() {
            $ionicPopup.alert({
              title: 'Don\'t eat that!',
              content: 'That\'s my sandwich'
            }).then(function(res) {
              console.log('Thank you for not eating my delicious ice cream cone');
            });
          };
      });
;


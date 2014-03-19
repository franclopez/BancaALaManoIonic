var consultaSaldoService = angular.module('bancaalamano.services',['ngResource']);
	consultaSaldoService.factory('ConsultaSaldoService', ['$resource',
		function($resource) {

			var urlService = 'http://10.101.145.17:8080/wabResserab/rest/ahorro/ConsultaCuenta/?';

			var inputParams = {"infotx_Code":"0301","infotx_applicationId":"mon","infotx_subCanal":"mov","infotx_propsGroup":"BalInqRq","infotx_Org":"Redeban","infotx_Version":"1.0","SignonRq_SPName":"Bancolombia","SignonRq_CustLoginId":"3102749381","SignonRq_GovIssueIdentType":"1","SignonRq_IdentSerialNum":"98707028","SignonRq_CryptType":"3DES","SignonRq_Pswd":"D1BB62E5116D0F8B","SignonRq_ClientDt":"20130905101521","SignonRq_CustLangPref":"es-CO","BalInqRq_RqUID":"627640","BalInqRq_NetworkOwner":"Redeban","BalInqRq_OriginatorName":"8003","BalInqRq_TerminalId":"3102749381","BalInqRq_TerminalType":"Cellphone","BalInqRq_BankId":"0007"};
			 return $resource(urlService, {}, 
			 	{ query: {method:'POST', params: inputParams , isArray:false} }
			 );
		}
	]);
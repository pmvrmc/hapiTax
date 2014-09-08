'use strict';

/* Controllers */

appControllers.controller('TaxesDataCtrl', ['$scope', 'TaxesDataFactory', function($scope, TaxesDataFactory) {

	$scope.submitForm = function(isValid, user) {
		// check to make sure the form is completely valid
		if (isValid) {
			TaxesDataFactory.postTax(user).then(function(result){
                alert("Post data: \n" + JSON.stringify(result.data));
            });
		}
		else {
			alert('our form is not amazing');
		}
	};
	
	$scope.estadosCivis = [
      'Solteiro','Casado','Divorciado','Viúvo','Outro'
    ];
	
	$scope.validateTelefone = function($value){
        if($value > 0 || $value =='' || typeof $value === "undefined"){
            return true;
        } else {
            return false;
        }
    };
	
    
    $scope.validateNif = function($value){
        if(typeof $value == "undefined" || $value == ''){
            return true;
        }
        
        if ($value.length!=9 || $value < 0) {
			return false;
		}

		var soma,resto,digi;
		var nif = new Array(9);
		for (var i=0;i<9;i++) {
			nif[i] = Number($value.substring(i,i+1));
		}
		for (var i=0,soma=0;i<8;i++) {
			soma += nif[i]*(9-i);
		}
		resto = soma%11;
		digi = 11-resto;
		if (digi>9){
			digi=0;
		}
		return (digi==nif[8]);
    };
   	
}]);

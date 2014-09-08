'use strict';

/* Controllers */

appControllers.controller('TaxesDataCtrl', ['$scope', 'TaxesDataFactory', function($scope, TaxesDataFactory) {

    //the object that will store the form data aka ng-model
    $scope.user = {};
    
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
    
    
    $scope.form = [
            {
                'formGroupNgClass' : '{ "has-error" : userFieldForm.field.$invalid && !userFieldForm.field.$pristine }',
                'labelFor' : 'userName',
                'labelClass' : 'col-md-2 control-label',
                'labelText' : 'Nome',
                'inputType' : 'text',
                'inputId' : 'userName',
                'inputValidate' : 'empty',
                'inputName' : 'userName', 
                'inputPlaceholder' : 'Nome Contribuinte',
                'inputClass' : 'form-control',
                'inputNgModel' : 'name',
                'inputRequired' : true,
                'otherAttributes' : 'required novalidate',
                'errorNgShow' : 'userFieldForm.field.$invalid && !userFieldForm.field.$pristine',
                'errorText' : 'Campo obrigatório'
            },
            {
                'formGroupNgClass' : '{ "has-error" : userFieldForm.field.$invalid && !userFieldForm.field.$pristine }',
                'labelFor' : 'userTelefone',
                'labelClass' : 'col-md-2 control-label',
                'labelText' : 'Telefone',
                'inputType' : 'text',
                'inputId' : 'userTelefone',
                'inputValidate' : '"validateTelefone($value)"',
                'inputName' : 'telefone', 
                'inputPlaceholder' : 'Telefone do Contribuinte',
                'inputClass' : 'form-control',
                'inputRequired' : false,
                'inputNgModel' : 'telefone',
                'otherAttributes' : 'required',
                'errorNgShow' : 'userFieldForm.field.$invalid && !userFieldForm.field.$pristine',
                'errorText' : 'Introduza um telefone válido'
            },
            {
                'formGroupNgClass' : '{ "has-error" : userFieldForm.field.$invalid && !userFieldForm.field.$pristine }',
                'labelFor' : 'userNIF',
                'labelClass' : 'col-md-2 control-label',
                'labelText' : 'NIF',
                'inputType' : 'text',
                'inputId' : 'userNIF',
                'inputValidate' : '"validateNif($value)"',
                'inputName' : 'userNIF', 
                'inputPlaceholder' : 'NIF',
                'inputClass' : 'form-control',
                'inputRequired' : false,
                'inputNgModel' : 'nif',
                'otherAttributes' : 'required',
                'errorNgShow' : 'userFieldForm.field.$invalid && !userFieldForm.field.$pristine',
                'errorText' : 'Insira um NIF válido'
            },
            {
                'formGroupNgClass' : '{ "has-error" : userFieldForm.field.$invalid && !userFieldForm.field.$pristine }',
                'labelFor' : 'userEmail',
                'labelClass' : 'col-md-2 control-label',
                'labelText' : 'Email',
                'inputType' : 'email',
                'inputId' : 'userEmail',
                'inputValidate' : 'empty',
                'inputName' : 'userEmail', 
                'inputPlaceholder' : 'myEmail@emailHost.com',
                'inputClass' : 'form-control',
                'inputRequired' : false,
                'inputNgModel' : 'email',
                'otherAttributes' : 'required',
                'errorNgShow' : 'userFieldForm.field.$invalid && !userFieldForm.field.$pristine',
                'errorText' : 'Email inválido'
            }
        ];
   	
}]);

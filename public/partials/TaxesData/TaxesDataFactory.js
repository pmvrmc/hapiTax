'use strict';

/* Services */

appServices.factory('TaxesDataFactory', ['$http', function($http){
     
   function postTax(user){
        return $http({
            method: 'POST', 
            url: '/postTax',
            data: user
            
        });
    }
    
    return {
        postTax: postTax
    }

}]);

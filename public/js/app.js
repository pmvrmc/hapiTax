'use strict';


// Declare app level module which depends on filters, and services
angular.module('hapiTax', [
    'ngRoute',
    'hapiTax.filters',
    'hapiTax.services',
    'hapiTax.directives',
    'hapiTax.controllers',
    'ui.utils',
    'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/taxes', {
        templateUrl: 'partials/TaxesData/taxes-panel.html', 
        controller: 'TaxesDataCtrl'
    });

    $routeProvider.otherwise({
        redirectTo: '/taxes'
    });

}]);




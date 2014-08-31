'use strict';


// Declare app level module which depends on filters, and services
angular.module('App', [
    'ngRoute',
    'App.filters',
    'App.services',
    'App.directives',
    'App.controllers',
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




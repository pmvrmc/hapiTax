'use strict';

/* Controllers */

var appControllers = angular.module('App.controllers', []);


appControllers.controller('PanelController', function(){
    this.tab = 1; 
    this.selectTab = function(setTab){
        this.tab = setTab;    
    };
    this.isSelected = function(checkTab){
        return this.tab == checkTab;
    }
});
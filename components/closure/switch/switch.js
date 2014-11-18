/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-6d456da
 */
goog.provide('ng.material.components.switch');
goog.require('ng.material.components.checkbox');
goog.require('ng.material.components.radioButton');
goog.require('ng.material.core');
!function(){"use strict";function e(e,t,i){function c(e,t){var c=angular.element(e[0].querySelector(".md-switch-thumb")),n=r.compile(c,t);return function(e,t,r,m){return i(t),n(e,c,r,m)}}var r=e[0],n=t[0];return{restrict:"E",transclude:!0,template:'<div class="md-switch-bar"></div><div class="md-switch-thumb">'+n.template+"</div>",require:"?ngModel",compile:c}}angular.module("material.components.switch",["material.core","material.components.checkbox","material.components.radioButton"]).directive("mdSwitch",e),e.$inject=["mdCheckboxDirective","mdRadioButtonDirective","$mdTheming"]}();
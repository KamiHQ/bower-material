/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-6d456da
 */
!function(){"use strict";function e(){return{restrict:"E",template:'<object class="md-icon"></object>',compile:function(e,n){var t=angular.element(e[0].children[0]);angular.isDefined(n.icon)&&t.attr("data",n.icon)}}}angular.module("material.components.icon",["material.core"]).directive("mdIcon",e)}();
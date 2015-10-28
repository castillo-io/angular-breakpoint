/**
 * Angular Breakpoint
 * @version v1.0
 * @author Alex Castillo
 * @link http://www.github.com/alexandercastillo/angular-breakpoint
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(n){function t(){var t={xs:"(max-width: 480px)",sm:"(min-width: 481px) and (max-width: 768px)",md:"(min-width: 769px) and (max-width: 991px)",lg:"(min-width: 992px)"};return{set:function(n){n&&(t=n)},$get:["$rootScope","$window",function(i,e){return{init:function(){var o={},r={};i.breakpoint={},n.forEach(t,function(n,t){o[t]=e.matchMedia(n),r[t]=function(n){i.$evalAsync(function(){i.breakpoint[t]=n.matches})},o[t].addListener(r[t]),r[t](o[t])})},get:function(){return t}}}]}}function i(n){return{restrict:"A",scope:{},controller:function(){n.init()}}}n.module("ngBreakpoint",[]).provider("$breakpoint",t).directive("breakpoint",i),i.$inject=["$breakpoint"]}(angular);

'use strict'

var angular 	= require('angular')
var LddCtrl 	= require('./ldd.ctrl')
var onShow 		= require('./ldd.on-show')
var template	= require('./ldd.html')

module.exports = angular
  .module('ldd', [])
  .controller('LddCtrl',LddCtrl)
  .directive('onShow',onShow)
  .name

'use strict'

var angular = require('angular')
var LddCtrl = require('./ldd.ctrl')
var template= require('./ldd.html')

module.exports = angular
  .module('ldd', [])
  .controller('LddCtrl',LddCtrl)
  .name
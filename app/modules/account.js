
'use strict'

var angular = require('angular')
var AccountCtrl = require('./account.ctrl')
var template= require('./account.html')

module.exports = angular
  .module('Account', [])
  .controller('AccountCtrl',AccountCtrl)
  .name
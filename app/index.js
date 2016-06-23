
'use strict';

/**
 * Module dependencies
 */
var angular    = require('angular'),
    common = require('./index.common');

/**
 * Setup App Module
 */
var app = module.exports = angular.module('app', [
    'ng',
    common.name,
    require('./modules/account'),
    require('./modules/ldd')
  ])

  .constant('version', require('../package.json').version)
  .constant('config', require('./index.config'))
  .config(require('./index.route'))
  .config(function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(
      /^\s*(https?|ftp|mailto|file|tel):/);
  })


  .run(function ($log, $rootScope, $ionicBackdrop, $timeout) {
    $log.debug('app module - run');
    $ionicBackdrop.retain();
    $timeout(function() {
      $ionicBackdrop.release();
    }, 600);
  });

// Add the styles to the page
require('./index.scss');

// Bootstrap App Module
common.ionicBootstrap(app, global);

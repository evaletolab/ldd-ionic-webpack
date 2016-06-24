
'use strict';

/**
 * Module dependencies
 */
var angular = require('angular');

// set the public path
var scripts = global.document.getElementsByTagName('script');
var src = scripts[scripts.length - 1].getAttribute('src');
global.__webpack_public_path__ = src.substr(0, src.lastIndexOf('/') + 1);

// Add Angular/Ionic dependencies
require('angular-animate');
require('angular-sanitize');
require('angular-ui-router');
require('ionic/release/js/ionic');
require('ionic/release/js/ionic-angular');
require('font-awesome/css/font-awesome.css');
require('animate.css/animate.css');

var common = module.exports = angular.module('common', ['ionic']);

common.run(function ($rootScope, $window) {
  $window.addEventListener('resize', function () {
    $rootScope.$broadcast('windowResize');
  });
});


// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//       // for form inputs)
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

//       // Don't remove this line unless you know what you are doing. It stops the viewport
//       // from snapping when text inputs are focused. Ionic handles this internally for
//       // a much nicer keyboard experience.
//       cordova.plugins.Keyboard.disableScroll(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })


common.ionicBootstrap = function (module, window) {
  if (!window || !window.document) {
    throw new Error('window and document objects required.');
  }

  function onDeviceReady () {
    // bootstrap angular app
    angular.element(window.document).ready(function () {
      angular.bootstrap(window.document, [
        module.name
      ]);
    });

    // remove document deviceready listener
    window.document.removeEventListener('deviceready', onDeviceReady, false);
  }

  function onWindowLoad () {
    if (!(!window.cordova && !window.PhoneGap && !window.phonegap)) {
      // when on device add document deviceready listener
      window.document.addEventListener('deviceready', onDeviceReady, false);

    } else {
      // when on browser trigger onDeviceReady
      onDeviceReady();
    }

    // remove window load listener
    window.removeEventListener('load', onWindowLoad, false);
  }

  // add window load listener
  window.addEventListener('load', onWindowLoad, false);
};

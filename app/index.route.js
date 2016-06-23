
'use strict';

module.exports = route;

var template= require('index.tabs.html')


// inject deps
// route.$inject=['$stateProvider', '$urlRouterProvider'];

// implement service
function route($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: 'index.tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.ldd', {
    url: '/ldd',
    views: {
      'tab-ldd': {
        controller: 'LddCtrl',
        templateUrl: "modules/ldd.html"
      }
    }
  })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        controller: 'AccountCtrl',
        templateUrl: 'modules/account.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/ldd');

}
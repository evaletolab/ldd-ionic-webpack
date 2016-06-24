'use strict';

module.exports = onShow;

// inject deps
onShow.$inject=['$animate','$timeout'];

// implement service
function onShow($animate,$timeout) {
  return {
    link: function (scope, elem, attrs) {
      elem.on('click', function () {
        var self = angular.element(this);
        $animate.addClass(self, 'on-show').then(function () {
          $timeout(function() {
            self.removeClass('on-show');
          },1000);            
        });
      });
    }
  };
}



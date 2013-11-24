'use strict';

// Directives

angular.module('piboard.dashboard.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('githubEvent', function() {
    return {
      restrict: 'AE',
      templateUrl: 'partials/github/github-event.html',
      scope: {
        event: '='
      }
    };
  });

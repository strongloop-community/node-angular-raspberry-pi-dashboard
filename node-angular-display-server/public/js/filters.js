'use strict';

/* Filters */
angular.module('piboard.dashboard.filters', []).
  filter('autoLinkLite', function() {
    return function(text) {
      return String(text).replace(/(https?:\/\/[^\s]*)/g, "<a href=\"$1\">$1</a>");
    };
  }).
  filter('epochTime', function() {
    return function(text) {
      return new Date(text).getTime();
    };
  }).
  filter('truncate', function () {
    return function (text, length, end) {
        
        if (isNaN(length)) {
          length = 10;
        }
        
        if (end === undefined) {
          end = "...";          
        }

        if (text.length <= length || text.length - end.length <= length) {
          return text;
        } else {
          return String(text).substring(0, length-end.length) + end;
        }
    };
  }).
  filter('toGithubUserUrl', function() {
    return function(text) {
      return "https://github.com/" + text;
    };
  });

'use strict';

//Services

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('piboard.dashboard.services', ['ngResource']).
	
	factory("LoopBackMetrics", function($resource) {
		
  	return $resource('http://localhost:3000/metrics');
		
	}).
  factory("Twitter", function($resource) {
    return $resource('http://search.twitter.com/search.json', 
    { callback: 'JSON_CALLBACK' },
    { 
      search: {
        method: 'JSONP',
        params: {
          q: 'angular.js AngularJS', 
          result_type: 'recent',
          rpp:25
        },
        isArray: false
      }
    });
  }).
  factory("GithubStrongLoop", function($resource) {
    return $resource('https://api.github.com/orgs/strongloop/events');
  }).
  factory("GithubStrongLoopCommunity", function($resource) {
    return $resource('https://api.github.com/orgs/strongloop-community/events');
  }).
  factory("GithubLibUV", function($resource) {
    return $resource('https://api.github.com/repos/joyent/libuv/events');
  }).
  factory("GithubNode", function($resource) {
    return $resource('https://api.github.com/repos/joyent/node/events');
  }).
  factory("StackOverflow", function($resource) {
    return $resource('https://api.stackexchange.com/2.0/search', 
      { callback: 'JSON_CALLBACK'},
      {
        search: {
          method: 'JSONP',
          params: {
            pageSize: 20,
            order: 'desc',
            sort: 'activity',
            tagged: 'angular',
            site: 'stackoverflow'
          }
        },
        isArray: false
      });
  }).
  factory("Reddit", function($resource) {
    return $resource('http://www.reddit.com/r/angularjs/new.json', 
      { jsonp: 'JSON_CALLBACK' }, 
      {
        read: {
          method: 'JSONP', 
          params: {
            sort: 'new'
          }
        }, 
        isArray: false
      });
  });




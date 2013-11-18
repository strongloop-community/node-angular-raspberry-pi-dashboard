'use strict';

// Controllers

function LoopBackMetricsController($scope, LoopBackMetrics) {
	
  $scope.metrics = [{name: "Metric 1", metric: 50},
                   {name: "Metric 2", metric: 43},
                   {name: "Metric 3", metric: 27},
                   {name: "Metric 4", metric: 29},
                   {name: "Metric 5", metric: 29},
                   {name: "Metric 6", metric: 34}];
	
	//$scope.events = LoopBackMetrics.query();
}

function GithubNodeController($scope, GithubNode) {
  $scope.events = GithubNode.query();
}

function GithubLibuvController($scope, GithubLibUV) {
  $scope.events = GithubLibUV.query();
}

function GithubStrongLoopController($scope, GithubStrongLoop) {
  $scope.events = GithubStrongLoop.query();
}

function GithubStrongLoopCommunityController($scope, GithubStrongLoopCommunity) {
  $scope.events = GithubStrongLoopCommunity.query();
}

function TwitterController($scope, Twitter) {
  Twitter.search({}, function(data) {
    $scope.tweets = data.results;
  });
}

function StackOverflowController($scope, StackOverflow) {
  StackOverflow.search({}, function(data) {
    $scope.questions = data.items;
  });
}

function RedditController($scope, Reddit) {
  Reddit.read({}, function(data) {
    $scope.posts = data.data.children.map(function(e) {
      return e.data;
    });
  });
}
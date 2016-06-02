// require(...) imports the exports package which contains the ajaxRequest function module
var githubRequest = require('./../js/github_request.js').githubRequest;

$(document).ready(function() {
  var currentSearchObject = new Search();
  $('#search').click(function() {
    var user = $('#username').val();
    $('#username').val("");
    currentSearchObject.getRepos(user);
  });
});

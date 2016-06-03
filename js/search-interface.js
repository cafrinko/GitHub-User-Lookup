// require(...) imports the exports package which contains the ajaxRequest function module
var githubRequest = require('./../js/github_request.js').Search;

$(document).ready(function() {
  var currentSearchObject = new githubRequest();
  console.log(githubRequest);
  $('#search').click(function() {
    var user = $('#username').val();
    $('#username').val("");
    currentSearchObject.getRepos(user);
  });
});

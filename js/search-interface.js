// require(...) imports the exports package which contains the ajaxRequest function module
var User = require('./../js/github-request.js').User;

$(document).ready(function() {
  var currentUserObject = new User();
  console.log(currentUserObject);
  $('#searchUser').click(function() {
    var user = $('#username').val();
    // $('#username').val("");
    currentUserObject.getRepos(user);
    event.preventDefault();
  });
});

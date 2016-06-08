// save apiKey in .env file which is addded to .gitignore or list of files that are ignored when you deploy your application to github or heroku
// you should not leave your api key in your source code to prevent theft
// var apiKey = require('../.env').apiKey;
var apiKey = require('./../.env').apiKey;

exports.User = function(){
};

exports.User.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos' + '?access_token=' + apiKey).then(function(response){
    // console.log(response);
    // debugger;
    for(i = 0; i < response.length; i++) {
      var tempResponse = response[i];
      if (tempResponse.description === "") {
        $('.showRepos').append("<br>" + "<p>" + "Repository Name: " + tempResponse.name + "</p>");
        // console.log(tempResponse.name);
      }
      else {
        $('.showRepos').append("<br>" + "<p>" + "Repository Name: " + tempResponse.name + "</p>" + "<p>" + "Description: " + response[i].description);
      }
    }
  }).fail(function(error){
    $('.showError').text(error.responseJSON.message);
  });
};

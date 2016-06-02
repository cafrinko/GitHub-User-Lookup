// save apiKey in .env file which is addded to .gitignore or list of files that are ignored when you deploy your application to github or heroku
// you should not leave your api key in your source code to prevent theft
var apiKey = require('../.env').apiKey;
var username =

exports.Search = function(){
};

exports.Search.prototype.getRepos = function(){
$.get('https://api.github.com/users/' + username + '/repos' + '?access_token=' + apiKey).then(function(response){
  for(i = 0; i < response.length; i++) {
    $('.showRepos').append(response.repository.name + response.repository.description)
}).fail(function(error){
console.log(error.responseJSON.message);
});
};

$(document).ready(function() {
  var currentSearchObject = new Search();
  currentSearchObject.getRepos();

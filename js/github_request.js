// save apiKey in .env file which is addded to .gitignore or list of files that are ignored when you deploy your application to github or heroku
// you should not leave your api key in your source code to prevent theft
var apiKey = require('../.env').apiKey;

exports.Search = function(){
};

exports.Search.prototype.getRepos = function() {
  console.log("Hi! I'm a weather object.");
};

$(document).ready(function() {
  var currentSearchObject = new Search();
  currentSearchObject.getRepos();

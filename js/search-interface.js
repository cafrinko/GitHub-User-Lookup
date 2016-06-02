// require(...) imports the exports package which contains the ajaxRequest function module
var githubRequest = require('./../js/github_request.js').githubRequest;

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city);
  });
});

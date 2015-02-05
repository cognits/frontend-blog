titles = [];

// Javascript Code.
$(document).ready(function () {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });

  $.getJSON('_posts/posts.json', {format: "json"}, function(data) {

  
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    titles.push(['posts'][0]['title']);
    $(".posts1").append(titles);
    //
  });});
});

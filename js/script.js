
// Javascript Code.
$(document).ready(function () {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });

  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    
    $(".posts1Title").html(posts['posts'][0]['title']);
    $(".posts1Date").html(posts['posts'][0]['date']);
    $(".posts1Content").html(posts['posts'][0]['content']);
    //
  });
});

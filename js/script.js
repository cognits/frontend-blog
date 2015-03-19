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
    $(".posts").html(posts['posts'][0]['content']);
    $(".posts1").html(posts['posts'][0]['title']);
    $(".posts2").html(posts['posts'][0]['date']);
    //
  });
});


$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".face").html(posts['posts'][1]['content']);
    $(".face1").html(posts['posts'][1]['title']);
    $(".face2").html(posts['posts'][1]['date']);
    //
  });
});

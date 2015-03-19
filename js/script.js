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
    $(".title").html(posts['posts'][0]['title'])
    $(".posts").html(posts['posts'][0]['content']);
    $(".posts2").html(posts['posts'][1]['content']);
    $(".posts3").html(posts['posts'][2]['content']);
    $(".posts4").html(posts['posts'][3]['content'])
    //
  });
});

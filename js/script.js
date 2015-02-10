
// Javascript Code.
$(document).ready(function() {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    
    $(".postsTitle1").html(posts['posts'][0]['title']);
    $(".postsContent1").html(posts['posts'][0]['content']);
    $(".postsDate1").html(posts['posts'][0]['date']);

    $(".postsTitle2").html(posts['posts'][1]['title']);
    $(".postsContent2").html(posts['posts'][1]['content']);
    $(".postsDate2").html(posts['posts'][1]['date']);

    $(".postsTitle3").html(posts['posts'][2]['title']);
    $(".postsContent3").html(posts['posts'][2]['content']);
    $(".postsDate3").html(posts['posts'][2]['date']);
    //
  });
  $("#menu").accordion();
});

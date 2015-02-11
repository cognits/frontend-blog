// Javascript Code.
ptitle = [];
pcontent = [];
pdate = [];
$(document).ready(function() {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);

    for (var i = 0; i < 3; i++){
      ptitle.push(posts['posts'][i]['title']);
      pcontent.push(posts['posts'][i]['content']);
      pdate.push(posts['posts'][i]['date']);

      $(".menu").append("<h3 class =\"postTitle\">" + ptitle[i] + "</h3>"+
                          "<br> </br>"+
                          "<div class =\"post\">"+
                            "<p></p>"+
                            "<br> </br>"+
                            "<p class=\"postContent\">"+ pcontent[i] + "</p>"+
                            "<p class=\"postDate\"> Posted by <p class=\"blue\">Cognits Student </p> <p class=\"date\">, " + pdate[i] + "</p></p>"+
                          "</div>"+
                          "<hr class =\"divs\">");
    }
    //
  });

  /*for (var i = 0; i < 3; i++){
      console.log(ptitle[i]);
      console.log(pcontent[i]);
      console.log(pdate[i]);
      $(".menu").append("<h3 class =\"postTitle\">" + ptitle[i] + "</h3>"+
                          "<br> </br>"+
                          "<div class =\"post\">"+
                            "<p></p>"+
                            "<p class=\"postContent\">"+ pcontent[i] + "</p>"+
                            "<p class=\"postDate\">" + pdate[i] + "</p>"+
                          "</div>"+
                          "<hr class =\"divs\">");
    }*/
});

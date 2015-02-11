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
                          "<form> "+
                            "Coment: <input type=\"text\" name=\"coment\"value=\"Write here your coment!\">"+
                          "</form>" +
                          "<button id=\"boton\">Add!</button><br/>"+
                          "<div class=\"coments\">"+
                          "<br></br>"+
                          "</div>"+
                          "</div>"+
                          "<hr class =\"divs\">");
    }
    //
    $('#boton').click(function() {
        alert("Has dado un click");
        var Add = $("input[name=coment]").val();
          $('.coments').append("<p>"+Add+"</p>");
  });
  });
  
  //alert("Has dado un click");
  
});

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
      var number = i +1;
      var no = number.toString();
      ptitle.push(posts['posts'][i]['title']);
      pcontent.push(posts['posts'][i]['content']);
      pdate.push(posts['posts'][i]['date']);

      $(".menu").append("<h3 class =\"postTitle"+no+"\">" + ptitle[i] +"</h3>"+
                          "<br> </br>"+
                          "<div class =\"post"+no+"\">"+
                            "<p></p>"+
                            "<br> </br>"+
                            "<p class=\"postContent"+no+"\">"+ pcontent[i] + "</p>"+
                            "<p class=\"postDate"+no+"\"> Posted by <p class=\"blue\">Cognits Student </p> <p class=\"date\">, " + pdate[i] + "</p></p>"+
                          "<form> "+
                            "Coment: <input type=\"text\" name=\"coment\"value=\"Write here your coment!\">"+
                          "</form>" +
                          "<button id=\"boton"+no+"\">Add!</button><br/>"+
                          "<div class=\"coments"+no+"\">"+
                          "<br></br>"+
                          "</div>"+
                          "</div>"+
                          "<hr class =\"divs\">");
    }
    //Comentario Post 1
    $('#boton1').click(function() {
        alert("Comment Added !!!");
        var Add = $("input[name=coment]").val();
        $('.coments1').append("<p>"+Add+"</p>");
        var d = new Date();
        //$()('Fecha: '+d.getDate(),'<br>Dia de la semana: '+d.getDay(),'<br>Mes (0 al 11): '+d.getMonth(),'<br>Año: '+d.getFullYear(),'<br>Hora: '+d.getHours(),'<br>Hora UTC: '+d.getUTCHours(),'<br>Minutos: '+d.getMinutes(),'<br>Segundos: '+d.getSeconds());
  });

  //Comentario Post 2
  $('#boton2').click(function() {
        alert("Comment Added !!!");
        var Add = $("input[name=coment]").val();
          $('.coments2').append("<p>"+Add+"</p>");
  });

  //Comentario Post 3
  $('#boton3').click(function() {
        alert("Comment Added !!!");
        var Add = $("input[name=coment]").val();
          $('.coments3').append("<p>"+Add+"</p>");
  });
  });
  
  //alert("Has dado un click");
  
});

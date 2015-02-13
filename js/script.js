// Javascript Code.
ptitle = [];
pcontent = [];
pdate = [];
$(document).ready(function() {

  function dia_de_la_semana(dia){
    if (dia == 1 ){
          return "Monday";
        }
        else if (dia == 2){
          return "Tuesday";
        }
        else if (dia == 3){
          return "Wednesday";
        }
        else if (dia == 4){
          return "Thursday";
        }
        else if (dia == 5){
          return "Friday";
        }
        else if (dia == 6){
          return "Saturday";
        }
        else if (dia == 7){
          return "Sunday";
        }
  }
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
    //
    //Comentario Post 1
    $('#boton1').click(function() {
        alert("Comment Added !!!");
        var Add = $("input[name=coment]").val();
        var d = new Date();
        var mes = d.getMonth();
        $('.coments1').append("<p class =\"com\">"+Add+"</p>");
        $('.coments1').append('<p class =\"day\"> '+ dia_de_la_semana(d.getDay()) +' / '+ d.getDate()+' / '+(mes + 1) + ' / '+d.getFullYear() +' | '+d.getHours() +' : '+d.getMinutes() +' : '+d.getSeconds() +'</p>');
        $('.coments1').append('<p class =\"coment_separator\"> ****************************************** </p>');
  });

  //Comentario Post 2
  $('#boton2').click(function() {
        alert("Comment Added !!!");
        var Add = $("input[name=coment]").val();
        var d = new Date();
        var mes = d.getMonth();
        $('.coments2').append("<p class =\"com\">"+Add+"</p>");
        $('.coments2').append('<p class =\"day\"> '+ dia_de_la_semana(d.getDay()) +' / '+ d.getDate()+' / '+(mes + 1) + ' / '+d.getFullYear() +' | '+d.getHours() +' : '+d.getMinutes() +' : '+d.getSeconds() +'</p>');
        $('.coments2').append('<p class =\"coment_separator\"> ****************************************** </p>');
  });

  //Comentario Post 3
  $('#boton3').click(function() {
        alert("Comment Added !!!");
        var Add = $("input[name=coment]").val();
        var d = new Date();
        var mes = d.getMonth();
        $('.coments3').append("<p class =\"com\">"+Add+"</p>");
        $('.coments3').append('<p class =\"day\"> '+ dia_de_la_semana(d.getDay()) +' / '+ d.getDate()+' / '+(mes + 1) + ' / '+d.getFullYear() +' | '+d.getHours() +' : '+d.getMinutes() +' : '+d.getSeconds() +'</p>');
        $('.coments3').append('<p class =\"coment_separator\"> ****************************************** </p>');
  });
  $(document).ready(function() {
    $('.post1').hide();
    $('.post2').hide();
    $('.post3').hide();
  //alert("Has dado un click");
  });
  $('.postTitle1').click(function() {
    $('.post1').toggle('blind');
    $('.post2').hide('slide');
    $('.post3').hide('slide');
  });

  $('.postTitle2').click(function() {
    $('.post2').toggle('blind');
    $('.post1').hide('slide');
    $('.post3').hide('slide');
  });

  $('.postTitle3').click(function() {
    $('.post3').toggle('blind');
    $('.post2').hide('slide');
    $('.post1').hide('slide');
  });

  $('.home').click(function() {
    $('.post3').hide('slide');
    $('.post2').hide('slide');
    $('.post1').hide('slide');
  });


  });
 });

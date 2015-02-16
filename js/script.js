// Javascript Code.
//Variables where I keep every element of json
ptitle = [];
pcontent = [];
pdate = [];
$(document).ready(function() {
  
  //function that returns me the exact day of the week
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

    //For adding me the divs for each post
    for (var i = 0; i < 3; i++){
      var number = i +1;
      var no = number.toString();
      ptitle.push(posts['posts'][i]['title']);
      pcontent.push(posts['posts'][i]['content']);
      pdate.push(posts['posts'][i]['date']);

      $(".menu").append("<p id =\"postTitle"+no+"\" class=\"generalTitle\">" + ptitle[i] +"</p>"+
                          "<br> </br>"+
                          "<div class =\"post"+no+"\">"+
                            "<p></p>"+
                            "<br> </br>"+
                            "<p id=\"postContent"+no+"\" class=\"generalContent\" >"+ pcontent[i] + "</p>"+
                            "<p class=\"date\"> Posted by <p class=\"blue\">Cognits Student </p> <p id=\"postDate"+no+"\" class= \"generalDate\" >, " + pdate[i] + "</p></p>"+
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
    //Commentary Post 1
    $('#boton1').click(function() {
        alert("Comment Added !!!");
        var Add = $("input[name=coment]").val();
        var d = new Date();
        var mes = d.getMonth();
        $('.coments1').append("<p class =\"com\">"+Add+"</p>");
        $('.coments1').append('<p class =\"day\"> '+ dia_de_la_semana(d.getDay()) +' / '+ d.getDate()+' / '+(mes + 1) + ' / '+d.getFullYear() +' | '+d.getHours() +' : '+d.getMinutes() +' : '+d.getSeconds() +'</p>');
        $('.coments1').append('<p class =\"coment_separator\"> ******************************************** </p>');
  });

  //Commentary Post 2
  $('#boton2').click(function() {
        alert("Comment Added !!!");
        var Add = $("input[name=coment]").val();
        var d = new Date();
        var mes = d.getMonth();
        $('.coments2').append("<p class =\"com\">"+Add+"</p>");
        $('.coments2').append('<p class =\"day\"> '+ dia_de_la_semana(d.getDay()) +' / '+ d.getDate()+' / '+(mes + 1) + ' / '+d.getFullYear() +' | '+d.getHours() +' : '+d.getMinutes() +' : '+d.getSeconds() +'</p>');
        $('.coments2').append('<p class =\"coment_separator\"> ****************************************** </p>');
  });

  //Commentary Post 3
  $('#boton3').click(function() {
        alert("Comment Added !!!");
        var Add = $("input[name=coment]").val();
        var d = new Date();
        var mes = d.getMonth();
        $('.coments3').append("<p class =\"com\">"+Add+"</p>");
        $('.coments3').append('<p class =\"day\"> '+ dia_de_la_semana(d.getDay()) +' / '+ d.getDate()+' / '+(mes + 1) + ' / '+d.getFullYear() +' | '+d.getHours() +' : '+d.getMinutes() +' : '+d.getSeconds() +'</p>');
        $('.coments3').append('<p class =\"coment_separator\"> ****************************************** </p>');
  });

  //Automatically hiding divs
  $(document).ready(function() {
    $('.post1').hide();
    $('.post2').hide();
    $('.post3').hide();
  //alert("Has dado un click");
  });

  //click on title 1 and shows the post 1
  $('#postTitle1').click(function() {
    $('.post1').toggle('blind');
    $('.post2').hide('slide');
    $('.post3').hide('slide');
  });

  //click on title 2 and shows the post 2
  $('#postTitle2').click(function() {
    $('.post2').toggle('blind');
    $('.post1').hide('slide');
    $('.post3').hide('slide');
  });

  //click on title 3 and shows the post 3
  $('#postTitle3').click(function() {
    $('.post3').toggle('blind');
    $('.post2').hide('slide');
    $('.post1').hide('slide');
  });

  //click on home and hide posts 
  $('.home').click(function() {
    $('.post3').hide('slide');
    $('.post2').hide('slide');
    $('.post1').hide('slide');
  });

  //Buscador:
  $.expr[':'].icontains = function(obj, index, meta, stack){
    return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
    };
    $(document).ready(function(){   
        $('#buscador').keyup(function(){
                     buscar = $(this).val();
                     $('.lista h3').removeClass('resaltar');
                            if(jQuery.trim(buscar) != ''){
                               $(".lista h3:icontains('" + buscar + "')").addClass('resaltar');
                            }
        });
    });   

  });
 });

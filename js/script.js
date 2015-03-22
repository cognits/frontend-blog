// Javascript Code.

//This is the search box on the page
$(document).ready(function(){
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();   
        $('.list').append('<div class="item">' + toAdd + '</div>')
    });
});

//This is the search box on the page
$(document).ready(function(){
    $('.pull-me').click(function(){
        $(".panel").slideToggle('slow');
    });
});

//This is the search box on the page!!!! 
jQuery.fn.extend({
    resaltar: function(busqueda, claseCSSbusqueda){
        var regex = new RegExp("(<[^>]*>)|("+ busqueda.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1") +')', 'ig');
        var nuevoHtml=this.html(this.html().replace(regex, function(a, b, c){
            return (a.charAt(0) == "<") ? a : "<span class=\""+ claseCSSbusqueda +"\">" + c + "</span>";
        }));
        return nuevoHtml;
    }
});
//To highlight text
function resaltarTexto(){
    $("#texto").resaltar(cajaTexto.value, "resaltarTexto");
}
//end tehe search box



//Here are the Json
$(document).ready(function () {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });

//The first post
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".title").html(posts['posts'][0]['title']);
    $(".content").html(posts['posts'][0]['content']);
    $(".date").html(posts['posts'][0]['date']);

    //
  });
});
//The image of first post
$(function(){
 $(document).ready(function(){
  $.getJSON("_posts/posts.json",
   function(data){
    $.each(data.posts, function(i,auto){
     $("<img/>").attr("src", auto.image).appendTo("#imagenes");
    });
   });
  return false;
 });
});

//the second post
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".titles").html(posts['posts'][1]['title']);
    $(".contents").html(posts['posts'][1]['content']);
    $(".dates").html(posts['posts'][1]['date']);
    //
  });
});
//The image of second post
$(function(){
 $(document).ready(function(){
  $.getJSON("_posts/posts.json",
   function(data){
    $.each(data.posts, function(i,auto){
     $("<img/>").attr("src", auto.image1).appendTo("#imagene");
    });
   });
  return false;
 });
});

//the third posts
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".titless").html(posts['posts'][2]['title']);
    $(".contentss").html(posts['posts'][2]['content']);
    $(".datess").html(posts['posts'][2]['date']);
    //
  });
});
//The image of third post
$(function(){
 $(document).ready(function(){
  $.getJSON("_posts/posts.json",
   function(data){
    $.each(data.posts, function(i,auto){
     $("<img/>").attr("src", auto.image2).appendTo("#imageness");
    });
   });
  return false;
 });
});

//the fourth post
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".title4").html(posts['posts'][3]['title']);
    $(".content4").html(posts['posts'][3]['content']);
    $(".date4").html(posts['posts'][3]['date']);
    //
  });
});
//The image of fourth post
$(function(){
 $(document).ready(function(){
  $.getJSON("_posts/posts.json",
   function(data){
    $.each(data.posts, function(i,auto){
     $("<img/>").attr("src", auto.image3).appendTo("#imagen4");
    });
   });
  return false;
 });
});

//The fifth post
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".title5").html(posts['posts'][4]['title']);
    $(".content5").html(posts['posts'][4]['content']);
    $(".date5").html(posts['posts'][4]['date']);
    //
  });
});
//The image of fifth post
$(function(){
 $(document).ready(function(){
  $.getJSON("_posts/posts.json",
   function(data){
    $.each(data.posts, function(i,auto){
     $("<img/>").attr("src", auto.image4).appendTo("#imagen5");
    });
   });
  return false;
 });
});

//The sixth post
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".title6").html(posts['posts'][5]['title']);
    $(".content6").html(posts['posts'][5]['content']);
    $(".date6").html(posts['posts'][5]['date']);
    //
  });
});
//The image of sixth post
$(function(){
 $(document).ready(function(){
  $.getJSON("_posts/posts.json",
   function(data){
    $.each(data.posts, function(i,auto){
     $("<img/>").attr("src", auto.image5).appendTo("#imagen6");
    });
   });
  return false;
 });
});
//en the post


$(document).ready(function(){
    $(".more").toggle(function() {
        $(this).text("Leer menos...").siblings(".complete").show();
    }, function() {
        $(this).text("Leer mas...").siblings(".complete").hide();
    }); 
});
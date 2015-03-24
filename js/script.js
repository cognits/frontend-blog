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
    $("#show").html(posts['posts'][0]['show']);
    $(".content").html(posts['posts'][0]['content']);
    $(".date").html(posts['posts'][0]['date']);
  });
});
//the slideToggle
$(document).ready(function(){
    $('.pull1').click(function(){
        $(".post1").slideToggle('slow');
    });
});


//the second post
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".titles").html(posts['posts'][1]['title']);
    $("#shows").html(posts['posts'][1]['show']);
    $(".contents").html(posts['posts'][1]['content']);
    $(".dates").html(posts['posts'][1]['date']);
    //
  });
});
//the slideToggle
$(document).ready(function(){
    $('.pull2').click(function(){
        $(".post2").slideToggle('slow');
    });
});

//the third posts
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".titless").html(posts['posts'][2]['title']);
    $("#showss").html(posts['posts'][2]['show']);
    $(".contentss").html(posts['posts'][2]['content']);
    $(".datess").html(posts['posts'][2]['date']);
    //
  });
});
//the slideToggle
$(document).ready(function(){
    $('.pull3').click(function(){
        $(".post3").slideToggle('slow');
    });
});

//the fourth post
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".title4").html(posts['posts'][3]['title']);
    $("#show4").html(posts['posts'][3]['show']);
    $(".content4").html(posts['posts'][3]['content']);
    $(".date4").html(posts['posts'][3]['date']);
    //
  });
});
$(document).ready(function(){
    $('.pull4').click(function(){
        $(".post4").slideToggle('slow');
    });
});

//The fifth post
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".title5").html(posts['posts'][4]['title']);
    $("#show5").html(posts['posts'][4]['show']);
    $(".content5").html(posts['posts'][4]['content']);
    $(".date5").html(posts['posts'][4]['date']);
    //
  });
});
$(document).ready(function(){
    $('.pull5').click(function(){
        $(".post5").slideToggle('slow');
    });
});

//The sixth post
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".title6").html(posts['posts'][5]['title']);
    $("#show6").html(posts['posts'][5]['show']);
    $(".content6").html(posts['posts'][5]['content']);
    $(".date6").html(posts['posts'][5]['date']);
    //
  });
});
$(document).ready(function(){
    $('.pull6').click(function(){
        $(".post6").slideToggle('slow');
    });
});
//end the posts

//the efects of posts
$(document).on('ready',function()
{
$("#ocultar").click(function(event){
event.preventDefault();
$("#muestra").show("slow");
$("#oculto").hide("slow");
$("#mostrar").show(1000);
});

$("#mostrar").click(function(event){
event.preventDefault();
$("#oculto").show(1000);
$("#muestra").hide(1000);
$("#mostrar").hide("slow");
});
});
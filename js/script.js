// Javascript Code.

//This is the search box on the page
$(document).ready(function(){
    $('.buttonsearch').click(function() {
        var toAdd = $('input[name=checkListItem]').val();   
        $('.list').append('<div class="item">' + toAdd + '</div>')
    });
});

//This is the search box on the page
$(document).ready(function(){
    $('.pull-me').click(function(){
        $(".panelsearch").slideToggle('slow');
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
    $("body").resaltar(cajaTexto.value, "resaltarTexto");
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
$(document).ready(function(){
    $('.add').click(function() {
        var toAdd = $('input[name=checkListItem]').val();   
        $('.coments').append('<div class="item">' + toAdd + '</div>')
    });
});
//ehd the first post

//the second post
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".title1").html(posts['posts'][1]['title']);
    $("#show1").html(posts['posts'][1]['show']);
    $(".content1").html(posts['posts'][1]['content']);
    $(".date1").html(posts['posts'][1]['date']);
    //
  });
});
//the slideToggle
$(document).ready(function(){
    $('.pull2').click(function(){
        $(".post2").slideToggle('slow');
    });
});
$(document).ready(function(){
    $('#add2').click(function() {
        var toAdd = $('input[name=checkListItem]').val();   
        $('.coments2').append('<div class="item">' + toAdd + '</div>')
    });
});
//end the second post


//the third posts
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".title2").html(posts['posts'][2]['title']);
    $("#show2").html(posts['posts'][2]['show']);
    $(".content2").html(posts['posts'][2]['content']);
    $(".date2").html(posts['posts'][2]['date']);
    //
  });
});
//the slideToggle
$(document).ready(function(){
    $('.pull3').click(function(){
        $(".post3").slideToggle('slow');
    });
});
$(document).ready(function(){
    $('#add3').click(function() {
        var toAdd = $('input[name=checkListItem]').val();   
        $('.coments3').append('<div class="item">' + toAdd + '</div>')
    });
});

//the fourth post
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".title3").html(posts['posts'][3]['title']);
    $("#show3").html(posts['posts'][3]['show']);
    $(".content3").html(posts['posts'][3]['content']);
    $(".date3").html(posts['posts'][3]['date']);
    //
  });
});
$(document).ready(function(){
    $('.pull4').click(function(){
        $(".post4").slideToggle('slow');
    });
});
$(document).ready(function(){
    $('#add4').click(function() {
        var toAdd = $('input[name=checkListItem]').val();   
        $('.coments4').append('<div class="item">' + toAdd + '</div>')
    });
});
//end the posts

//the efects of posts
$(document).on('ready',function()
{
$("#ocultar").click(function(event){
event.preventDefault();
$("#muestra").show("slow");
$(".oculto").hide("slow");
$("#mostrar").show(1000);
});

$("#mostrar").click(function(event){
event.preventDefault();
$(".oculto").show(1000);
$("#muestra").hide(1000);
$("#mostrar").hide("slow");
});
});



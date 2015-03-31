// Javascript Code.

//This is the search box on the page
$(document).ready(function(){
    $('.buttonsearch').click(function() {
        var toAdd = $('input[name=checkListItem]').val();   
        $('.list').append('<div class="item">' + toAdd + '</div>')
    });
});

//This is the search box on the page



$(document).on('ready',function()
{
$(".pull-me").click(function(event){
event.preventDefault();
$(".panelsearch").show("slow");
$(".pull-me").hide("slow");
$(".hide_search").show("slow");
});

$(".hide_search").click(function(event){
event.preventDefault();
$(".pull-me").show(1000);
$(".panelsearch").hide(1000);
});
});

//This is the search box on the page!!!! 
jQuery.fn.extend({
    mark: function(search0, classCCSSsearch){
        var regex = new RegExp("(<[^>]*>)|("+ search0.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1") +')', 'ig');
        var newHtml=this.html(this.html().replace(regex, function(a, b, c){
            return (a.charAt(0) == "<") ? a : "<span class=\""+ classCCSSsearch +"\">" + a + "</span>";
        }));
        return newHtml;
    }
});
//To highlight text
function highlightText(){
    $('.search1').mark(textbox.value,"highlight");
    $('.search2').mark(textbox.value,"highlight");
    $('.search3').mark(textbox.value,"highlight");
    $('.search4').mark(textbox.value,"highlight");
    $('.search5').mark(textbox.value,"highlight");
    $('.search6').mark(textbox.value,"highlight");
    $('.search7').mark(textbox.value,"highlight");
    $('.search8').mark(textbox.value,"highlight");
    $('.search9').mark(textbox.value,"highlight");
    $('.search10').mark(textbox.value,"highlight");
    $('.search11').mark(textbox.value,"highlight");
    $('.search12').mark(textbox.value,"highlight");
    $('.search13').mark(textbox.value,"highlight");
    $('.search14').mark(textbox.value,"highlight");
    $('.search15').mark(textbox.value,"highlight");
    $('.search16').mark(textbox.value,"highlight");
}
//end tehe search box


  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);

    //
    function order_date (date1, date2) {
      return new Date(date2.date).getTime() - new Date(date1.date).getTime();
    }

    posts['posts'].sort(order_date);
});
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
    $(".date").html(posts['posts'][0]['inf'] + posts['posts'][0]['date']);

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
        var toAdd = $('input[name=checkListItem1]').val();   
        $('.coments1').append('<div class="item">' + toAdd + '</div>')
        $("input[name=checkListItem1]").val("");
        $("#clcoment1").val("");
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
    $(".date1").html(posts['posts'][1]['inf'] + posts['posts'][1]['date']);
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
        var toAdd = $('input[name=checkListItem2]').val();   
        $('.coments2').append('<div class="item">' + toAdd + '</div>')
        $("input[name=checkListItem2]").val("");
        $("#clcoment2").val("");
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
    $(".date2").html(posts['posts'][2]['inf'] + posts['posts'][2]['date']);
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
        var toAdd = $('input[name=checkListItem3]').val();   
        $('.coments3').append('<div class="item">' + toAdd + '</div>')
        $("input[name=checkListItem3]").val("");
        $("#clcoment3").val("");
    });
});

//the fourth post
$(document).ready(function () {
  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".title3").html(posts['posts'][3]['title']);
    $("#show3").html(posts['posts'][3]['show']);
    $(".content3").html(posts['posts'][3]['content']);
    $(".date3").html(posts['posts'][3]['inf'] + posts['posts'][3]['date']);
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
        var toAdd = $('input[name=checkListItem4]').val();   
        $('.coments4').append('<div class="item">' + toAdd + '</div>')
        $("input[name=checkListItem4]").val("");
        $("#clcoment4").val("");
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


 $(".bottons").hover(
      function() {
        $(this).addClass("hover_button");
    },
      function() {
        $(this).removeClass("hover_button");
    });
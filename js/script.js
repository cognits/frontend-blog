// Javascript Code.


$(document).ready(function () {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });

  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);

    function order_date (a, b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }

    posts['posts'].sort(order_date);

    var info = posts['posts'][0]['by'] + posts['posts'][0]['date'];
    var info2 = posts['posts'][1]['by'] + posts['posts'][1]['date'];
    var info3 = posts['posts'][2]['by'] + posts['posts'][2]['date'];
    var info4 = posts['posts'][3]['by'] + posts['posts'][3]['date']

    $(".title").html(posts['posts'][0]['title']);
    $(".posts").html(posts['posts'][0]['content']);
    $(".info").html(info);

    $(".title2").html(posts['posts'][1]['title']);
    $(".posts2").html(posts['posts'][1]['content']);
    $(".info2").html(info2);

    $(".title3").html(posts['posts'][2]['title']);
    $(".posts3").html(posts['posts'][2]['content']);
    $(".info3").html(info3);

    $(".title4").html(posts['posts'][3]['title']);
    $(".posts4").html(posts['posts'][3]['content']);
    $(".info4").html(info4);
    //

    $(".search_container").hide();
    $(".posts").hide();
    $(".posts2").hide();
    $(".posts3").hide();
    $(".posts4").hide();
    $(".three_four_posts").hide();
    $(".newest").hide();
    $(".title_comment").hide();
    $(".show_modal").hide();
    $(".comments_user").hide();

    $("#first_post").click(function() {
      $(".posts").slideToggle();
      $("#title_cmmt1").slideToggle();
      $("#commentary_button1").slideToggle();
      $("#comment_div1").slideToggle();
    });

    $("#second_post").click(function() {
      $(".posts2").slideToggle();
      $("#title_cmmt2").slideToggle();
      $("#commentary_button2").slideToggle();
      $("#comment_div2").slideToggle();
    });

    $("#third_post").click(function() {
      $(".posts3").slideToggle();
      $("#title_cmmt3").slideToggle();
      $("#commentary_button3").slideToggle();
      $("#comment_div3").slideToggle();
    });

    $("#fourth_post").click(function() {
      $(".posts4").slideToggle();
      $("#title_cmmt4").slideToggle();
      $("#commentary_button4").slideToggle();
      $("#comment_div4").slideToggle();

    });

    $(".older").click(function() {
      $(".one_two_posts").hide();
      $(".three_four_posts").show();
      $(".older").hide();
      $(".newest").show();
    });

    $(".newest").click(function() {
      $(".three_four_posts").hide();
      $(".one_two_posts").show();
      $(".newest").hide();
      $(".older").show();
    });

    $(".view_more_post").hover(
      function() {
        $(this).addClass("active_button");
    },
      function() {
        $(this).removeClass("active_button");
    });

    $("#save_comment").click(function() {
        var to_add_name = $("input[name='name_input1']").val();
        var to_add_comment = $("#comment_input1").val();
        if (to_add_comment != '' && to_add_name != '') {
          append('#comment_div1',to_add_name,to_add_comment);
        };
    });

    $("#save_comment2").click(function() {
        var to_add_name = $("input[name='name_input2']").val();
        var to_add_comment = $("#comment_input2").val();
        if (to_add_comment != '' && to_add_name != '') {
          append('#comment_div2',to_add_name,to_add_comment);
        };
    });

    $("#save_comment3").click(function() {
        var to_add_name = $("input[name='name_input3']").val();
        var to_add_comment = $("#comment_input3").val();
        if (to_add_comment != '' && to_add_name != '') {
          append('#comment_div3',to_add_name,to_add_comment);
        };
    });

    $("#save_comment4").click(function() {
        var to_add_name = $("input[name='name_input4']").val();
        var to_add_comment = $("#comment_input4").val();
        if (to_add_comment != '' && to_add_name != '') {
          append('#comment_div4',to_add_name,to_add_comment);
        };
    });

    var append = function(target, input_name, input_comment) {
      $(target).append('<div class=user_comment>' + '<b>' + input_name + ': </b>' + input_comment + '</div>');
    };
  });
});


$(document).ready(function(){
    $('#buttonsearch').click(function() {
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

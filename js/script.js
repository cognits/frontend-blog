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

    $(".posts").hide();
    $(".posts2").hide();
    $(".posts3").hide();
    $(".posts4").hide();
    $(".three_four_posts").hide();
    $(".newest").hide();
    $("#title_cmmt1").hide();
    $("#commentary_button1").hide();
    $(".comments_user").hide();

    $("#first_post").click(function() {
      $(".posts").slideToggle();
      $("#title_cmmt1").slideToggle();
      $("#commentary_button1").slideToggle();
      $(".comments_user").slideToggle();
    });

    $("#second_post").click(function() {
      $(".posts2").slideToggle();
    });

    $("#third_post").click(function() {
      $(".posts3").slideToggle();
    });

    $("#fourth_post").click(function() {
      $(".posts4").slideToggle();
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
          append('.comments_user',to_add_name,to_add_comment);
        };
    });

    var append = function(target, input_name, input_comment) {
      $(target).append('<div class=user_comment>' + '<b>' + input_name + ': </b>' + input_comment + '</div>');
    };
  });
});


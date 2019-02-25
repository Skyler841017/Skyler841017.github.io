// 漢堡選單
$(function() {
  $(window).resize(function() {
    let w = $(window).width();
    if (w > 1530) {
      $('.hamburger').hide();
      $('.menu').show();
    } else {
      $('.hamburger').show();
      $('.menu').hide();
    }
  })
  $('.hamburger').click(function() {
    $('.menu').slideToggle();
  })
})

//go top button
$(function() {
  $("#go_top").click(function() {
    $("html,body").animate({
      scrollTop: 0
    })
  })
  
  $(window).scroll(function() {
      let h = $("html,body").scrollTop();
      if (h > 200) {
        $("#go_top").show().removeClass().addClass("animated fadeInRight");
      } else {
        $("#go_top").removeClass().addClass("animated hinge");
      }
  })
})
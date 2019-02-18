// 漢堡選單
$(function() {
  $(window).resize(function() {
    let w = $(window).width();
    if (w < 540) {
      $('.mobile-toggle').show();
      $('.menu').hide();


    } else {
      $('.mobile-toggle').hide();
      $('.menu').show();

    }
  })

  $('.menu').find('a').click(function() {
    if ($(window).width() < 540) {
      $('.mobile-toggle').click()
    }
  })

  $('.mobile-toggle').click(function() {
    $('.menu').slideToggle();
  })
})

//hover

$(function() {
  if ($(window).width() < 540) {
    $('input.contact__left--submit').removeClass('contact__left--submit-hover');
    $('a').removeClass('customNextBtn-hover');
    $('a').removeClass('customPrevBtn-hover');
  } else if ($(window).width() > 540) {
    $('input.contact__left--submit').addClass('contact__left--submit-hover');
    $('a').addClass('customNextBtn-hover');
    $('a').addClass('customPrevBtn-hover');
  }

  $(window).resize(function() {
    if ($(window).width() < 540) {
      $('input.contact__left--submit').removeClass('contact__left--submit-hover');
      $('a').removeClass('customNextBtn-hover');
      $('a').removeClass('customPrevBtn-hover');
    } else {
      $('input.contact__left--submit').addClass('contact__left--submit-hover');
      $('a').addClass('customNextBtn-hover');
      $('a').addClass('customPrevBtn-hover');
    }
  })
})
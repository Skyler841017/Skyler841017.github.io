
$(function() {

  //jQuery easing
  jQuery.easing['jswing'] = jQuery.easing['swing'];
  jQuery.extend(jQuery.easing, {
    easeOutCubic: function(x, t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },
  });

  //scroll
  $('nav li a').click(function() {
    let target = $(this).data('target');
    let topOffset = $(target).offset().top;
    $('html,body').animate({
      scrollTop: topOffset - navHeight
    }, 1000, 'easeOutCubic')
  })

  // go top
  $('#go_top').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 1000, 'easeOutCubic');
  });

  //wow.js
  wow = new WOW({

  });
  wow.init();


  // fix top
  let navHeight = $('header').outerHeight(true);
  $('.top--fixed').css('padding-top', navHeight);

  // 漢堡選單
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

  //hover
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

  //owl--carousel第一個
  $('.owl-one').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,

    responsiveClass: true,
    responsive: {
      0: {
        dots: false
      },
      540: {
        dots: true
      },
    }
  });

  var owl = $('.owl-one');
  owl.owlCarousel();
  // Go to the next item
  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  })

  //owl--carousel第二個
  $('.owl-two').owlCarousel({
    loop: true,

    margin: 15,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: false,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
      },
      540: {
        items: 2,
        slideBy: 2,
      },
      720: {
        items: 3,
        slideBy: 3,
      },
      1200: {
        items: 5,
        slideBy: 3, //一次滑幾個
      }
    }
  });

  var owl2 = $('.owl-two');
  owl2.owlCarousel();
  // Go to the next item
  $('.customNextBtn').click(function() {
    owl2.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl2.trigger('prev.owl.carousel', [300]);
  })
})
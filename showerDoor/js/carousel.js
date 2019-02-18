$(document).ready(function() {
  $('.owl-one').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,

    responsiveClass: true,
    responsive: {
      0:{
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
});

$(document).ready(function() {
  $('.owl-two').owlCarousel({
    loop: true,
    
    margin: 15,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: false,
    
    responsiveClass: true,
    responsive: {
      0:{
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

  var owl = $('.owl-two');
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
});

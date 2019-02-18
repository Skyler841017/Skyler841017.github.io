$(function () {
    $('nav').find('a').click(function () {
        if ($(window).width() < 992) {
            $('.navbar-toggler').trigger('click');
        }
        let target = $(this).data('target');
        let topOffset = $(target).offset().top;
        $('html,body').animate({
            scrollTop: topOffset
        })
    })
})   

  

// fix top
let navHeight = $('nav').outerHeight(true);
$('.fixTop').css('padding-top', navHeight)


//  animate
// $(function($) {
  
//     // Function which adds the 'animated' class to any '.animatable' in view
//     var doAnimations = function() {
      
//       // Calc current offset and get all animatables
//       var offset = $(window).scrollTop() + $(window).height(),
//           $animatables = $('.animatable');
      
//       // Unbind scroll handler if we have no animatables
//       if ($animatables.length == 0) {
//         $(window).off('scroll', doAnimations);
//       }
      
//       // Check all animatables and animate them if necessary
//           $animatables.each(function(i) {
//          var $animatable = $(this);
//               if (($animatable.offset().top + $animatable.height() - 20) < offset) {
//           $animatable.removeClass('animatable').addClass('animated');
//               }
//       });
  
//       };
    
//     // Hook doAnimations on scroll, and trigger a scroll
//       $(window).on('scroll', doAnimations);
//     $(window).trigger('scroll');
  
//   });
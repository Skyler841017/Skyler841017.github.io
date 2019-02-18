$(function() {
  $('nav').find('a').click(function() {
    let target = $(this).data('target');
    let topOffset = $(target).offset().top;
    $('html,body').animate({
      scrollTop: topOffset - navHeight
    })
  })
})

$('#go-top').click(function() {
  $('html,body').animate({
    scrollTop: 0
  }, 200);
});




// fix top
let navHeight = $('header').outerHeight(true);
$('.top--fixed').css('padding-top', navHeight)

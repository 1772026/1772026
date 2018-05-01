// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

$(window).scroll(function(){
  //Header
  if($(window).scrollTop()>= 100){
     $('.header').addClass('fixed-top');
  }
  else {
    $('.header').removeClass('fixed-top');
  }
  //Footer
    var navpanel = $('.bottom-nav');
    var panelHeight = navpanel.height() - 4;
    var footerHeight = $('.footer').height();
    if( $(document).height() - panelHeight - footerHeight <= $(window).scrollTop() + $(window).height() ) {
      navpanel.removeClass('fixed-bottom');
    } 
  else {
    navpanel.addClass('fixed-bottom');
    }
  
});


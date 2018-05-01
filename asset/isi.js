function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = (w / 2) + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchstop", slideFinish);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e)
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}
initComparisons();

var slideIndex = 0;
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


$(document).ready(function() {
  var $menu = $(".nav");
  var $menu_a = $("a", $menu);
  var id = false;
  var sections = [];
  var cek=false;
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

  // scroll spy
  $menu_a.click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - $(".nav").height()
      },
      {
        duration: 700,
        complete: hash($(this).attr("href"))
      }
    );
  });
  $menu_a.each(function() {
    sections.push($($(this).attr("href")));
  });
  $(window).scroll(function(event) {
    var scrolling = $(this).scrollTop() + $(this).height() / 3;
    var scroll_id;
    for (var i in sections) {
      var section = sections[i];
      if (scrolling > section.offset().top) {
        scroll_id = section.attr("id");
      }
    }
    if (scroll_id !== id) {
      id = scroll_id;
      $menu_a.removeClass("isactive");
      $("a[href='#" + id + "']", $menu).addClass("isactive");
    }
  });

  // sidebar
  $(".open").mouseover(function(){
    $(this).css("opacity","1");
    $(this).css("height","100px");
    $(this).css("padding-top","40px");
  });
  $(".open").mouseout(function(){
    $(this).css("opacity","0.3");
    $(this).css("height","60px");
    $(this).css("padding-top","20px")
  });
  $(".open").click(function(){
    $(".sidebar").fadeIn(500);
    $(this).fadeOut(100);
  });
  $(".close").click(function(){
    $(".sidebar").fadeOut(100);
    $(".open").fadeIn(500);
    $(".home").fadeTo(900,1);
    cek=false;
  });
});
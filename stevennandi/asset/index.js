$(document).ready(function() {
  // crousel
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
  // END Crousel
  var hash = function(h) {
    if (history.pushState) {
      history.pushState(null, null, h);
    } else {
      location.hash = h;
    }
  };

  $('a.but').hover(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      {
        duration: 50,
        complete: hash($(this).attr("href"))
      }
    );
  });
  
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
  // sidebar
  var cek=false;

  function singkat(x){
    // modalBox
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        modal.style.display = "block";
        modalImg.src = x.src;
        captionText.innerHTML = x.alt;
        $('.main_h').removeClass('sticky');
        var span = document.getElementsByClassName("tutup")[0];
        span.onclick = function() { 
            modal.style.display = "none";
             $('.main_h').remveClass('sticky');
        }
      // END modall box
  }
  $("#mll").click(function(){
    singkat(mlImg);
  })
  $("#acc").click(function(){
    singkat(acImg);
  })
  $("#fff").click(function(){
    singkat(ffImg);
  })
  $("#menu").click(function(){
    if(cek==false){
        cek=true;
        $(".sidebar").css({"width":"105px","height":"350px"});
        $("img.icon").css({"width":"110px","height":"100px"});
        $(".home").hide(50);
        $("#ml").click(function(){
          singkat(mlImg);
        })
        $("#ac").click(function(){
          singkat(acImg);
        })
        $("#ff").click(function(){
          singkat(ffImg);
        })
        
      }else{
        cek=false
        $(".sidebar").css({"width":"60px","height":"230px"});
        $("img.icon").css({"width":"69px","height":"60px"});
        $(".content").css("filter","brightness(100%)");
        $(".home").fadeTo(900,1);
      };
  });

  
});


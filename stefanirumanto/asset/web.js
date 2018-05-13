var x=2;
$('.nx').click(function(){
  if(x!=3)x++;
  else x=3;
  $('#gambarku').attr("src",'bahan/Button/'+x+'.png');
});
$('.pv').click(function(){
  if(x!=1)x--;
  else x=1;
  $('#gambarku').attr("src",'bahan/Button/'+x+'.png');
});

 var $menu = $(".arrow");
  var $menu_a = $("a", $menu);

  $menu_a.click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      {
        duration: 1000,
      }
    );
  });

    $(window).scroll(function() {
      if ($(window).scrollTop() > 500) {
          $('#myBtn').show();
      } else {
          $('#myBtn').hide();
      }
  });

$('#myBtn').click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
          scrollTop:0.
      },
      {
        duration: 1500,
      }
    );
  });

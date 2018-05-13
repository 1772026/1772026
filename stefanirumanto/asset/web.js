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
  var hash = function(h) {
    if (history.pushState) {
      history.pushState(null, null, h);
    } else {
      location.hash = h;
    }
  };

  $menu_a.click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      {
        duration: 1000,
        complete: hash($(this).attr("href"))
      }
    );
  });
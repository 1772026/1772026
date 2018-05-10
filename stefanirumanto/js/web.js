$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel({interval: 2000});
    //navbar
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
	    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 510) {
	    	$("#navbar").css({"color":"white","background-color":"white"});
	        
	    } else {	
	    	$("#navbar").css({"color":"black","background-color":"transparent"});
	    }
	}
    
});

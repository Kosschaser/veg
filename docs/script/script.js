$(document).ready(function(){
	 $(window).scroll(function(){
        if($(document).scrollTop() <= 100){
       		$('.navbar').removeClass(
        		"navbar-color");
       		$('.head-wrap').stop().animate({padding: '30px 0'}, 1000)
           	$('.nav-item').stop().animate({marginLeft: 
           		'10px'}, 'fast')
       	 } else if($(document).scrollTop() >= 100){
        	$('.navbar').addClass(
        		"navbar-color");
        	$('.head-wrap').stop().animate({padding: '0 0'}, 1000)
           	$('.nav-item').stop().animate({
           		marginLeft: '0'}, 'fast')
           };
	 });
	    $('.nav-link[href^="#"]').on('click',function (e) {
	        e.preventDefault();
	        let target = this.hash;
	        $target = $(target);
	        $('html, body').stop().animate({
	            'scrollTop':  $target.offset().top
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	        });
	    });

	    $('.min-button').on('click', function(e){
	    	e.preventDefault();
	    	items = $('.nav-item');
	    	for(let i = 0; i < items.length; i++){
	    		$(items[i]).css('display', 'block');
	    	}
	    });

	    $('.menu-buttons').on('click', 'a', function(e){
	    	e.preventDefault();
	    	let dest = this.hash;
	    	$('#menu-list').children().fadeOut(600)
	    	.promise().done( function(){
	    		$(dest).css('display', 'flex');
	    		$(dest).css('opacity', 0);
	    		$(dest).stop().animate({opacity: 1}, 600);
	    });
	});
});

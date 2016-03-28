$(document).ready(function () {
	$('.nav-link').on('click', function(e){
    	e.preventDefault();
    
    	var target= $(this).data('id');

    	$('html, body').stop().animate({
       		scrollTop: $(target).offset().top
    	}, 1000);
	});

	$('#loadPosts').on('click', function(e){
    	e.preventDefault();

    	var target= $('.blog-thumb').first();

    	target.clone().append(".blog-list");
    	target.clone().append(".blog-list");
    	target.clone().append(".blog-list");
    	target.clone().append(".blog-list");
    	target.clone().append(".blog-list");
    });

});
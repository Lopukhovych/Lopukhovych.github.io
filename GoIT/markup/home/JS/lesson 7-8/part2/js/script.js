$(document).ready(function(){
	var $input = $('input[type = "text"]');


	$input.hover(function(){
		var $span = $(this).prev();
		$span.animate({opacity: "show"}, "slow");
	}, function(){
		var $span = $(this).prev();
		$span.animate({opacity: "hide"}, "slow");
	});


	var $button = $(".button");
	
	$button.on('click', function(){
		$('span').show();
		setTimeout(function(){
			$('span').animate({opacity: "hide"}, "slow");
		}, 1200);
	});
	
});



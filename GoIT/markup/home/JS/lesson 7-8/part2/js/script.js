$(document).ready(function(){
	var $link = $('.wrapper a');
	// console.log($link);
	$link.append("<em></em>");

	$link.hover(function() {
		$(this).find("em").stop(true, true).animate({opacity: "show"}, "slow");
		var hoverText = $(this).attr("title");
	    $(this).find("em").text(hoverText);
	}, function() {
		$(this).find("em").stop(true, true).animate({opacity: "hide"}, "slow");
	});

		var $button = $(".button");
		$button.on('click', function(){
			$link.find('em').show();
		});

	
});


		// $(this).find("em").stop(true, true).animate({opacity: "show"}, "slow");

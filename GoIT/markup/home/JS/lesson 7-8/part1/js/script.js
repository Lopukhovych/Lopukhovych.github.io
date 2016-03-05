$(function(){
 	var $itemButton = $('.menuItem');
 	var $textItem = $('.textItem');
 	/*var $menu = $('.menu');    //хотел сделать, чтобы блоки были кликабельны, не вышло
	$('.menu li').click(function(){
		window.location=$(this).find("a").attr("href"); return false;
	});*/
	$textItem.hide();


	$($itemButton[0]).addClass('changedColor');
	$($textItem[0]).show();


 function switchText(e){
 	var index = $(this).index();
 	$itemButton.removeClass('changedColor');
 	$(this).addClass('changedColor');
 	
 	$textItem.hide();
 	$textItem.eq(index).show();
 }


 $itemButton.on('click',switchText);
});
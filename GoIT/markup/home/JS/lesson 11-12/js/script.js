$(function(){
		//считаем ширину картинки и отступов для подсчета кол-ва изображенных картинок
	var widthOfBlock = parseInt($('.carousel-element img').css('width'))+
	+ parseInt($('.carousel-element').css('margin-left')) 
	+ parseInt($('.carousel-element').css('margin-right')) + parseInt($('.carousel-element').css('padding-left')) 
	+	parseInt($('.carousel-element').css('padding-right'))+ parseInt($('.carousel-element img').css('padding-left'))
	+ parseInt($('.carousel-element').css('padding-right'));

	//вызываем функцию из планига 
	$('ul.carousel-list').carousel123({
		blockWidth : widthOfBlock,
	});


	// использование шаблонизатора
	var form =  $("#resume").html();

	 var data = {
	 		name:'Иванов Иван Иванович',
	 		photourl: 'img/user.png',
	 		university :'Студент заборостроительного университета',
	 		reason1:'Заборы строить не интересно',
	 		reason2:'Платят мало',
	 		reason3:'Приходиться работать по ночам',
	 		number:'+380222222222',
	 		link:'vk.com',
	 		feedback:'Если нужно, могу построить вам забор',
	 	};

	 var content = tmpl(form,data);

	 $('body').append(content);
	
});
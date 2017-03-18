'use strict';
$(function(){

var testField = $('#test').html();


var testData =[
	{
		question: "1)Кто открыл Америку?",
		answers:['Христофор Колумб','Я через форточку','Марко Поло'],
		rightAnswer:0,  //индекс правильного ответа
	},
	{
		question: "2)2 в 5 степени:",
		answers:['16','64','32','24'],
		rightAnswer:2,  
	},
	{
		question: "3)Сколько цветов у светофора?",
		answers:['1','6/2','4','0'],
		rightAnswer:1, 
	},
	];	
 
	localStorage.setItem('testData',JSON.stringify(testData));
	var array = JSON.parse(localStorage.getItem('testData'));
	var content = tmpl(testField,{
		data: testData,
	});

	$('.results').before(content);

	//среди чекбоксов одной области, только один может быть отмеченым
	$('input[type="checkbox"]').on('click',function(){
	     $(this).parent().parent().siblings().children().children().filter(':checked').not(this).removeAttr('checked');
	});



	function testAnswer(){
		$('.modal-body').empty();
		$('.modal-title').empty();

		$('.modal-title').html('Тест сделано правильно');
		//проверяем отвечено ли на все вопросы
		for(var i = 0; i< testData.length; i++){
			var classname = $('.question'+i);
			var $count = $('.question' + i + ' input[type="checkbox"]:checked').length;

			if($count == 0){
				$('.modal-title').text('Ошибка');
				$('.modal-body').text('Вы ответили не на все вопросы');
				return 0;
			}
		}	
		//проверяем правильность ответов
		for(var i=0; i < testData.length; i++){
			var $checkbox = $('.question' + i + ' input[type = "checkbox"]');
			for(var j = 0; j< testData[i].answers.length; j++){
				if($checkbox[j].checked){
					if($checkbox.eq(j).attr('id') == i + ''+ testData[i].rightAnswer){
						$('.modal-body').append('<div> ответ на '+ ( i + 1 )+ ' вопрос верный');
					}else{
						$('.modal-body').append('<div> ответ на '+ ( i + 1 )+ ' вопрос не верный');
						$('.modal-title').html('Вы допустили ошибку');
					}
				}
			}
		}
		//проверяем обнуление результата
		for( var i = 0 ; i < testData.length; i++){
			$('input[type = "checkbox"]').removeAttr('checked');
		}

		

	}

	$('.results').on('click',testAnswer);


});

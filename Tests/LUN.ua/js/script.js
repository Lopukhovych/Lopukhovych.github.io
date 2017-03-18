$(function(){
	
	//переменные для результата
	var name;
	var email;
	var city;
	var country;
	var link = {};
	var logo;
	//form1*********************************************
	$('input').val('');
	$('input[type=checkbox]').each(function(){this.checked = false;});
	
	$('.holder').ready( function(){
		$('.jp-current').nextUntil($('.jp-next'),'a').css('pointer-events','none');
		//загружаем страны
		$('.form2 .country').on('focusin',function(){
			$.ajax({
					method: "GET",
			  	url: "data/countries.json",
			  	dataType:"json",
			  	beforeSend: function( xhr ) {
						xhr.overrideMimeType("application/json");
					},
				 })
					.done(function(data) {
						$.each(data, function(key, val) {
							$('#country_list').append('<option  value="'+ key +'">' + val + '</option>');
					 	});
			});
		});
		//загружаем города
		$('.form2 .city').on('focusin',function(){
		  $.ajax({
						method: "GET",
						url: "data/cities.json",
						dataType:"json",
						beforeSend: function( xhr ) {
							xhr.overrideMimeType("application/json");
						},
					 })
							.done(function(data) {
								$.each(data, function(key, val) {
									if($("input[name=country]").val() == val.country){
										$('#city_list').append('<option  value='+ val.name +'></option>');										
									} else if($("input[name=country]").val()==''){
										$('#city_list').append('<option  value='+ val.name +'></option>');
									};
								});
		  });
		});

		//делаем 5 пункт(результат) не видимым на навигационной панели
		$('.holder a').eq(5).css('display', 'none');

		//При нажатии на ссылку проверяем какое это поле регистрации и 
		//в соответствии с индексом выполняем определенные действия
		$('.holder .jp-next').on('click',function(){
			$('a.jp-current').css('pointer-events','auto');
			//проверяем заполнение первой формы
			if(parseInt($('a.jp-current').html())==1){
				if($('.form1 input[type="text"]').val() == ''){
					if(!$('span').is(".text_error")){
						$('.form1 input[type="text"]').css('border',' 1px solid #ff0000');
						$('.form1 input[type="text"]').after('<span class = " text_error red"> - поле &laquo;Имя&raquo; обязательно для заполнения</span>');
					}
					return false;
				  }else{
							$('.form1 input[type="text"]').css('border','');
							$(".text_error").remove();	
							name = 	$('.form1 input[type="text"]').val();	
			   }
				if($('.form1 input[type="email"]').val() == ''){
			  	if(!$('span').is(".text_error1")){
						$('.form1 input[type="email"]').css('border',' 1px solid #ff0000');
						$('.form1 input[type="email"]').after('<span class = "text_error1 red"> - поле &laquo;e-mail&raquo; обязательно для заполнения</span>');
					} 
					return false;
			   }else if($('.form1 input[type="email"]').val() != ''){

							$(".text_error1").remove();			
							if(!(~$('.form1 input[type="email"]').val().indexOf('@'))){
								if(!$('span').is(".text_error2")){
									$('.form1 input[type="email"]').after('<span class = " text_error2 red"> - в адресе должен быть символ &laquo;@&raquo;</span>');
									$('.form1 input[type="email"]').css('border',' 1px solid #ff0000');
								}
								return false;
								
							}	else{
								$('.form1 input[type="email"]').css('border','');
								$(".text_error2").remove();
								email = $('.form1 input[type="email"]').val();
							}
				 };
				$('a.jp-current').next().next().css('color','#000');
				$('.holder a').eq(1).css('color','#ff9800');
			}

			//проверяем заполнение второй формы
			if(parseInt($('a.jp-current').html())==2){
				if($("input[name=country]").val() == ''){
					if(!$('span').is(".text_error1")){
						$("input[name=country]").css('border',' 1px solid #ff0000');
						$("input[name=country]").after('<span class = "text_error1 red"> - поле &laquo;Страна&raquo; обязательно для заполнения</span>');
					}
			    	return false;
			   } else{
			  		$("input[name=country]").css('border','');
						$(".text_error1").remove();
						country = $("input[name=country]").val();
			   };
			  // });
			  $("input[name=country]").on('click',function(){
					
				 });
			 	if($("input[name=city]").val() == ''){
			 		if(!$('span').is(".text_error")){
						$("input[name=city]").css('border',' 1px solid #ff0000');
						$("input[name=city]").after('<span class = "text_error red"> - поле &laquo;Город&raquo; обязательно для заполнения</span>');
			  	 } 
			    	return false;
			   }else{
			  		$("input[name=city]").css('border','');
						$(".text_error").remove();
						city = $("input[name=city]").val();
					};	
				$('.holder a').eq(2).css('color','#ff9800');	
				$('a.jp-current').next().css('color','#000');
			}

			//проверяем заполнение третьей формы
			if(parseInt($('a.jp-current').html())==3){
				for(var i in $('input[type=checkbox]')){
					if($('input[type=checkbox]').eq(i).prop('checked')){
						var input = $('input[type=checkbox]').eq(i).parent().children('input[type=text]');
						link[$('input[type=checkbox]').eq(i).parent().attr('class').toString()] = input.val();				
					 	if(input.val()==''){
					 		delete link[$('input[type=checkbox]').eq(i).parent().attr('class').toString()];
					 		if(!$('span').is(".text_error1")){
					 		input.css('border',' 1px solid #ff0000');
					 		input.after('<span class = "text_error1 red"> - это поле обязательно для заполнения</span>');
					 		};
							return false;
						} else{
							input.css('border','');
							$(".text_error1").remove();
						};
					}; 
				};
				$('.holder a').eq(3).css('color','#ff9800');
				$('a.jp-current').next().css('color','#000');
				$('.holder .jp-next').attr('id','end');
				$('.holder .jp-next').html('Завершить');
				}	

			//проверяем заполнение четвертой формы
			//и заполняем все данные 5 формы
			if(parseInt($('a.jp-current').html())==4){
				if(!logo){
					return false;
				}else if(logo.attr('alt')=='собачка'){
					return false;
				}
				
				$('.holder a').eq(4).css('color','#ff9800');
				$('.result').append(logo);
				$('.holder .jp-next').attr('id','end');

				//вставляем в резалт все данные
				$('.result').append('<p class="name">'+name+'</p>');
				$('.result').append('<p class="email" <a href=">'+email+'">' + email + '</a></p>');
				$('.result').append('<p class="adsress">'+ city+','+ country +'</p>');
				for(var i in link){
					$('.result').append('<p class=' + i + '>'+ '<span>'+ i +'</span>' +': <a href="'+ link[i] +'">'+link[i]+'/a></p>');
				}
				//меняем выд кнопок и навигации
				$('.holder a').css('display','none');
				// $('a.jp-current').next().css('color','#000');
				$('.holder .jp-next').css('display','block');
				$('.holder .jp-next').html('Пройти заново');
			} 
		});

		//form3 onclick реагирует на нажатие на чекбокс и 
		$('.form3').on('click','input[type=checkbox]',function(){
			if($(this).prop('checked')){
				$(this).parent().children("input[type=text]").css('display','inline');
				// if($(this).parent().children("input[type=text]").val() ==''){
				// }else{
				// }
			} else{
				$(this).parent().children("input[type=text]").css('display','none');
				$('.holder .jp-next').css('pointer-events','auto');
				$($(this).parent().children("input[type=text]").val(''));
				//если чекбокс был отмечен, а потом пустым
				$(this).parent().children("input[type=text]").css('border','none');
				$(".text_error1").remove();
			}
		});

		//	form4 регирует выбор логитипа профиля
		//и если это собачка, то выдает ошибку
			$('.form4').on('click','img',function(){
					// console.log($(this));
					$('.imgError').remove();
					$('.form4 img').removeClass('checked');

					var imgAttr = $(this).attr('alt');
					logo = $(this).clone();//сохраняем выбранный логотип для результата
					// console.log(logo);
					switch(imgAttr){
						case $('.form4 img').eq(0).attr('alt'):{
							$(this).addClass('checked');
							break;
						}
						case $('.form4 img').eq(1).attr('alt'):{
							$(this).addClass('checked');

							break;
						}
						case $('.form4 img').eq(2).attr('alt'):{
							$(this).addClass('checked');
							break;
						}
						default: {
							$('.images').after('<p class="red imgError">Вы выбрали собачку. А надо котика</p>');
							$(this).addClass('checked');
							break;
						};
					};
			});

		//При нажатии на ссылку делает все предыдущие элементы 
		//оранжевого цвета, а следующие серого
		$('.holder').on('click','a',function(){
			if(!$(this).hasClass('jp-next') && !$(this).hasClass('jp-previous')){
				$(this).prevUntil($('.jp-previous'),'a').css('color','#ff9800');
				$(this).prevUntil($('.jp-previous'),'a').css('pointer-events','auto');
				$(this).nextUntil($('.jp-next'),'a').css('color','#bbb');
				$(this).nextUntil($('.jp-next'),'a').css('pointer-events','none');
				$(this).css('color','#000');
				//проверяем
			}
			if(!$(this).hasClass('jp-next')){
				$('.holder .jp-next').html("Следующий →");
			}
			
			
		});
	});
	


	//plugin
	$("div.holder").jPages({
    containerID : "itemContainer",
    perPage : 1,
		startPage : 1,
		startRange : 1,
		midRange : 5,
		endRange : 1
  });



});
			
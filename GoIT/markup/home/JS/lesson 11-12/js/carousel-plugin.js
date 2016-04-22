(function($){
	$.fn.carousel123 = function(options){


		var defaults = {
			blockWidth:'210',
			currentLeftValue: '0',
			maximumOffset: '0',
		};

		var settings = $.extend(defaults,options);

		$body = $('body');
		var pictureField;
		$elementsList = $('.carousel-list');

		var pixelsOffset = parseInt(settings.blockWidth);//ширина блока(картинка+ отступы)
		var currentLeftValue = settings.currentLeftValue;//начальное положение 1 картинки
		var elementsCount = this.find('li').length;//кол-во картинок
			//minimumOffset, maximumOffset - значения которые будут нужны, чтобы картинки не выходили за область видимости    
		var minimumOffset = - (Math.floor(elementsCount/2) * pixelsOffset);

  	var maximumOffset = settings.maximumOffset;
  		//в этой условии мы регулируем размер карусели в зависимости от ширины pixelsOffset (картинки и отктупов)
  		//если pixelsOffset < 330, то 3 картинки в видимой области, иначе 2
		if( pixelsOffset < 330){
			$('.carousel-hiden').css('width',3 * pixelsOffset + 'px');
		} else{
			$('.carousel-hiden').css('width',2 * pixelsOffset + 'px');
		}
  	//левая кнопка
  	var leftButton = document.createElement('div');
  	$(leftButton).html("<span>Влево</span>").addClass("carousel-arrow-left"); 
   	$elementsList.before(leftButton);

  	//права кнопка
  	var rightButton = document.createElement('div');
  	$(rightButton).html("<span>Вправо</span>").addClass("carousel-arrow-right");
  	$elementsList.after(rightButton);

  	//при нажатии на левую кнопку, сдвигаем картинки влево на pixelsOffset пикселей
  function moveLeft(){
   	if(currentLeftValue != maximumOffset){
		currentLeftValue += pixelsOffset;
		$elementsList.animate({left: currentLeftValue + "px"},500);
		}	
  }

  	//при нажатии на правую кнопку, сдвигаем картинки вправо на pixelsOffset пикселей
  function moveRight(){
  	if(currentLeftValue != minimumOffset){
		currentLeftValue -= pixelsOffset;
		$elementsList.animate({left: currentLeftValue + "px"},500);
		}
  }

  //вводим обработчик событий 
  $(leftButton).on('click',moveLeft);
  $(rightButton).on('click', moveRight);



		return this;
	}
})(jQuery);
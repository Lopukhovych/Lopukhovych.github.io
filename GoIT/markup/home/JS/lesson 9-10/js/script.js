$(function() {

    //Карусель
	var jcarousel = $('.jcarousel');


	jcarousel
		.on('jcarousel:reload jcarousel:create', function () {
	                var carousel = $(this),
	                    width = carousel.innerWidth();

	                if (width >= 750) {
	                    width = width / 3;
	                } else if (width >= 500) {
	                    width = width / 2;
	                }

	                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
	            })
		.jcarousel({
                wrap: 'circular',
                animation: {
                    duration: 500,
                   	easing: "linear",
                    complete: function() {
                    }
                }
            });
		$('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

		 $('.jcarousel-pagination')
		            .on('jcarouselpagination:active', 'a', function() {
		                $(this).addClass('active');
		            })
		            .on('jcarouselpagination:inactive', 'a', function() {
		                $(this).removeClass('active');
		            })
		            .on('click', function(e) {
		                e.preventDefault();
		            })
		            .jcarouselPagination({
		                perPage: 1,
		                item: function(page) {
		                    return '<a href="#' + page + '">' + page + '</a>';
		                }
		            });
    //Селект               
    $(".chosen-select").chosen({disable_search_threshold: 20});
    

    //Чекбок используя jQuery
  jQuery(".niceCheck").each(
/* при загрузке страницы меняем обычные на стильные checkbox */
  function() {
     
     changeCheckStart($(this));
     
     
  });

                                        


function changeCheck(el)
/* 
  функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, который отвечает за новый вид)
  el - span контейнер для обычного чекбокса
  input - чекбокс
*/
{

  var el = el,
    input = el.find("input").eq(0);
      
  if(el.attr("class").indexOf("niceCheckDisabled")==-1)
  { 
      if(!input.attr("checked")) {
      el.addClass("niceChecked");
      input.attr("checked", true);
    } else {
      el.removeClass("niceChecked");
      input.attr("checked", false).focus();
    }
  }
  
    return true;
}

function changeVisualCheck(input)
{
/*
  меняем вид чекбокса при смене значения
*/
var wrapInput = input.parent();
  if(!input.attr("checked")) {
    wrapInput.removeClass("niceChecked");
  }
  else
  {
    wrapInput.addClass("niceChecked");
  }
}

function changeCheckStart(el)
/* 
  новый чекбокс выглядит так <span class="niceCheck"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
  новый чекбокс получает теже name, id и другие атрибуты что и были у обычного
*/
{

try
{
var el = el,
  checkName = el.attr("name"),
  checkId = el.attr("id"),
  checkChecked = el.attr("checked"),
  checkDisabled = el.attr("disabled"),
  checkTab = el.attr("tabindex"),
    checkValue = el.attr("value");
  if(checkChecked)
    el.after("<span class='niceCheck niceChecked'>"+
      "<input type='checkbox'"+
      "name='"+checkName+"'"+
      "id='"+checkId+"'"+
      "checked='"+checkChecked+"'"+
            "value='"+checkValue+"'"+
      "tabindex='"+checkTab+"' /></span>");
  else
    el.after("<span class='niceCheck'>"+
      "<input type='checkbox'"+
      "name='"+checkName+"'"+
      "id='"+checkId+"'"+
             "value='"+checkValue+"'"+
      "tabindex='"+checkTab+"' /></span>");

  
  /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */    
  if(checkDisabled)
  {
    el.next().addClass("niceCheckDisabled");
    el.next().find("input").eq(0).attr("disabled","disabled");
  }
  
  /* цепляем обработчики стилизированным checkbox */ 
  el.next().css({"margin-left":"10px"});   
  el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
  el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
  el.remove();
  if(jQuery.browser.msie)
  {
    el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) }); 
  }
  
}
catch(e)
{
  console.log('error with loading changeCheckStart function');
}

    return true;
}


/*Выпадающее меню*/
$('.dropdown').hover(
  function(){
    $(this).children('.sub-menu').slideDown(200);
  },
  function(){
    $(this).children('.sub-menu').slideUp(200);
      }
);
});
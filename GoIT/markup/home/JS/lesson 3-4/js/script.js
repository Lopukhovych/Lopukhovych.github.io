/*var h3 = document.createElement('h3');
h3.innerHTML = 'Тест по программированию';
div.appendChild(h3);*/
var body =document.body ;

var newElem = {
	createElement : function (tag,parent,className,innerHTML) {
		var elem = document.createElement(tag);
		if(parent){
			parent.appendChild(elem);
		}
		if(className) {
			elem.className = className; 
		}
		if(innerHTML){
			elem.innerHTML = innerHTML;
		}
		return elem;
	},
	createCheckbox : function(parent, text){
		var div = newElem.createElement('div', parent,'checkbox');
		var label = newElem.createElement('label',div);
		var input = newElem.createElement('input',label);
		input.type= 'checkbox';
		newElem.createElement('span', label ,'',text);
	},
	createButton : function(parent,text){
		var div = newElem.createElement('div',parent,'submit');
		var label = newElem.createElement('label',div);
		var input = newElem.createElement('input',label,'button');
		input.type = 'submit';
		input.value = text;
		newElem.createElement('span', input ,'',input.value );
	}
}
var form = newElem.createElement('form',body,'form');
form.action = '#';
var head = newElem.createElement('div',form,'header');
newElem.createElement('p',head,'article','Тест по программированию');

var content = newElem.createElement('div',form,'wrapper');
var questionul = newElem.createElement('ul',content,'list');
for(var i = 0; i <3; i++){
	var li = newElem.createElement('li',questionul,'');
	newElem.createElement('span',li,'question',1+i+'.Вопрос №'+(1+i));
	var variantul = newElem.createElement('ul',li,'box');
	for(var j = 1; j <= 3; j++){
		var li = newElem.createElement('li',variantul,'variant');
		newElem.createCheckbox(li,'Вариант ответа №'+j);	
	}
}

var button = newElem.createButton(form,'Проверить мои результаты');
// newElem.createElement('span', button,'inside','Проверить мои результаты');

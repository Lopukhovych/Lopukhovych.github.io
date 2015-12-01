//Задание 1
var base;
var exp;

base=prompt('Какое число вы хотите поднести в степень?', base);
exp=prompt('В какую степень Вы хотите вознести число?',exp);

if(exp<0){
	alert
}

if(exp>=0){
	function Power(base, exp){
		var number=1;
		for(var i=0; i<exp; i++){
			number*= base;
		}
		return number;
	} 
	alert(Power(base, exp));
} else{
	alert('Вы ввели не корректное значение')
}
//Задание 2
var arr = [];
 var name;
for(var i=0; i<5; i++){
	arr[i]=prompt('Введите имя ','');
}

var checkName;
checkName=prompt('check name in list ','');
var i;
for( i = 0;i<5;i++){
	if(checkName==arr[i]){
		alert(checkName +', вы успешно вошли.');
		break;
	} 
}
if (arr[i]!=checkName){
		alert('Имя пользователя не существует.');
}
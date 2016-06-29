$(function(){
 

//создание запроса и вывод под полем картинок


	$('.button').on('click', function(){
		$('.answer').remove();
		$('.query').append('<p class="answer">');
		if( $('.getquery').val() == ''){
			$('.answer').html('Введите запрос'); 
		}else{
			var query = $('.getquery').val();

			$.ajax({
				 url:"https://pixabay.com/api/?key=2602469-b580bf59a0f652c53881e1c85&q="+ query +"",
				 dataType: "jsonp",
			  })
				 .done(function(data){
					  for(var i=0; i<8; i++){
						 	$('.answer').append('<img src="'+ data.hits[i].webformatURL + ' ">' );
						}
					})
					.fail(function(){
						console.log('Запрос не получился');
					});
		};
	});

//ООП в прототипном стиле

function Human(){
	this.name = "Lizzi";
	this.age = 19;
	this.gender = "female";
	this.height = 1.6;
	this.weight = 50;
}

function Worker(){
	this.workplace = "factory";
	this.salary = 5000;
	this.work = function(){
		console.log("Я работаю");
	};
}

function Student(){
	this.studyPlace = "University";
	this.scholarship = 	2000;
	this.watching = function(){
		console.log('Игра престолов выходит в апреле 2017');
	};
}

Worker.prototype = new Human();
Student.prototype = new Human();


var porter = new Worker();
var student1 = new Student();

console.log('==========================================');
console.log("porter.name ",porter.name);
console.log("porter.height ",porter.height);
console.log("porter.salary ",porter.salary);
porter.work();
console.log('==========================================');
console.log('student1.name',student1.name);
console.log('student1.age',student1.age);
console.log('student1.StudyPlace',student1.studyPlace);
student1.watching();
console.log('==========================================');





} );
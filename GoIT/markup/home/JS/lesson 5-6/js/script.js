var butStart = document.getElementsByClassName('start')[0];//кнопка старта/паузы
var butClear = document.getElementsByClassName('clear')[0];//кнопка сброса
var secondsBoard = document.getElementsByClassName('scboard')[0];//табло секунд/минут/часов
var msBoard = document.getElementsByClassName('mlsec')[0];//табло миллисекунд
//конструктор
function Timer(){
	var self = this;
	self.countStart = 0; //начало отсчета
	self.pausePeriod = 0;//период паузы
	self.lastPauseTime = 0;//точное время остановки отсчета
	self.timerId = 0;
	self.msCounter = 0;//счетчик времени

	//текущее время
	self.currTime = function(){
		var currDate = new Date();
		return(currDate.getHours()*60*60*1000 + currDate.getMinutes()*60*1000 + currDate.getSeconds()*1000 + currDate.getMilliseconds());
	}

	//обновление показателя таймера
	self.updateTimerIndication = function(time){
		var hours = Math.floor((time/3600000) % 24);
		if(hours < 10){
			hours = '0'+ hours;
		}
		var minutes = Math.floor((time/60000) % 60);
		if(minutes < 10){
			minutes = '0'+ minutes;
		}
		var seconds = Math.floor((time/1000)%60);
		if(seconds < 10){
			seconds = '0'+ seconds;
		}
		var ms = Math.floor(time % 1000);
		secondsBoard.innerHTML = hours + ":" + minutes + ':'+ seconds;
		msBoard.innerHTML = ms;
		return(secondsBoard.innerHTML);//проверка
	}
	//обновление счетчика 
	self.updateCounter = function(){
		self.msCounter = self.currTime() - self.countStart - self.pausePeriod;
		// console.log(self.msCounter);
		self.updateTimerIndication(self.msCounter);
		// console.log(self.msCounter);
		// return(self.msCounter);
	}
	self.start = function(){
		if(secondsBoard.innerHTML == '00:00:00'){
			self.lastPauseTime = self.countStart = self.currTime();
			self.pausePeriod = 0;
		}


		self.pausePeriod = self.pausePeriod + self.currTime() - self.lastPauseTime;
		// console.log(self.pausePeriod);

		butStart.innerHTML = 'Pause';

		timerId = setInterval(self.updateCounter, 30);
		// console.log(self.updateCounter());

		butStart.removeEventListener('click',self.start);
		butStart.addEventListener('click',self.pause);
	}

	self.pause = function(){
		clearInterval(timerId);
		self.lastPauseTime = self.currTime();
		butStart.innerHTML = 'Conti..';
		butStart.removeEventListener('click',self.pause);
		butStart.addEventListener('click',self.start);
	}

	self.clear = function(){
		clearInterval(timerId);
		butStart.innerHTML = 'Start';
		secondsBoard.innerHTML = '00:00:00';
		msBoard.innerHTML = '00';
		butStart.removeEventListener('click',self.pause);
		butStart.addEventListener('click',self.start);
		self.pausePeriod = 0;
		self.lastPauseTime = 0;
	}
	
}


var qwe = new Timer();

butStart.addEventListener('click',qwe.start);//вводим событие при на жатии на кпопку "start"
butClear.addEventListener('click',qwe.clear);// вводим событие при на жатии на кпопку "clear"



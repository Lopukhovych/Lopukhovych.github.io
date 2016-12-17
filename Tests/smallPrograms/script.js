'use strict';
(function(){
    function primeFactors(n){
        let arr =[];
        let numb = {};
        let answer='';
        nextPrime:
            for (let i = 2; i <= n; i++) {
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) continue nextPrime;
                }
                while((n/i^0)=== n/i ){
                    n = n/i;
                    if(!numb[i]){
                        numb[i]=1;
                    }else{
                        numb[i]=numb[i]+1;
                    }
                }
                if(numb[i] > 1){
                    answer+=`(${i}**${numb[i]})`;
                }else if( numb[i] == 1){
                    answer+=`(${i})`;
                }
            }
        return answer;
    }
    let input = document.getElementById('enterNumb');
    let form = document.getElementsByClassName('numb-enter')[0];
    let result = document.querySelector('.result');
    let number = document.createElement('p');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        if(!input.value || !isFinite(input.value) ){
            number.innerHTML = "Введено неверное значение или поле для ввода пустое";
            number.style.color = '#d32f2f';
        }else{
            number.innerHTML = primeFactors(input.value);
            number.style.color = '#000';
        }
        result.appendChild(number);

    });
})();





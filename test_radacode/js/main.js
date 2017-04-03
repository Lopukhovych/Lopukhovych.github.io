(function(){
    let header_logo = document.getElementsByClassName('header-logo')[0];
    let paws = header_logo.children;
    for(let i =1; i<7; i++){
        setTimeout(function(){
            paws[i].style.display = 'block';
        },i*600);
    }
})();
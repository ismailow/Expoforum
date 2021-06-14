let button = document.getElementById('navToggler');
let nav = document.getElementById('nav');

button.onclick = function(){
    nav.classList.toggle('active');

    if(nav.classList.contains('active')){
        document.body.classList.add('scroll-hidden');
    } else {
        document.body.classList.remove('scroll-hidden')
    };
};


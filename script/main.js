let button = document.getElementById('navToggler');
let nav = document.getElementById('nav');

button.onclick = function(){
    nav.classList.toggle('active');
};
let btnMenu = document.getElementById('btn-menu');
let Nav = document.getElementById('main-nav');

btnMenu.addEventListener('click', function(){
    Nav.classList.toggle('mostrar');
});
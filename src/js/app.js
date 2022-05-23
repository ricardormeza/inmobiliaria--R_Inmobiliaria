document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
});

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
    console.log('mobilemenu');
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');

    navegacion.classList.toggle('mostrar');
    console.log('clickiiiii');
}
let openBurgerIcon = document.querySelector('.burgerSVG');
let burgerMenu = document.querySelector('.burger--menu');
let closeBurgerIcon = document.querySelector('.closeSVG');


openBurgerIcon.addEventListener('click' , () =>{
    burgerMenu.classList.add('open');
});

closeBurgerIcon.addEventListener('click' , () =>{
    burgerMenu.classList.remove('open');
});
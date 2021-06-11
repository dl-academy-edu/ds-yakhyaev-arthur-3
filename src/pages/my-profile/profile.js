//Mobile menu//

let buttonMobileHeader = document.querySelector('.header__menu-mobile-js');
let buttonCloseMobile = document.querySelector('.mobile__header__button-close-js');
let mobileHeader = document.querySelector('.mobile__header');


buttonMobileHeader.addEventListener('click', function(){
  mobileHeader.classList.add('mobile__header-open');

 
});

buttonCloseMobile.addEventListener('click', function(){
  mobileHeader.classList.remove('mobile__header-open');
  
});

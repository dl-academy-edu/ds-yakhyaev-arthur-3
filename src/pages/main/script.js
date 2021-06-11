
//функция кнопка стрелка вверх //

(function() {
  
  function trackScroll() {
    let scrolled = window.pageYOffset;

    if (scrolled > 1500) {
      goTopBtn.classList.remove('button__top-hedden');
    }
    if (scrolled < 1500) {
      goTopBtn.classList.add('button__top-hedden');
    }
  }

  function backToTop() {
    let scrollStep = window.pageYOffset / 50;
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -(scrollStep));
      setTimeout(backToTop, 0);
    }
  }

  let goTopBtn = document.querySelector('.button__top-js');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();



// sign in modal //

let modalSign = document.querySelector('.sign__modal-js');
let buttonSignOpen = document.querySelector('.header__item-sign-js');
let buttonSignClose = document.querySelector('.sign__close-js');
let buttonSignMobile = document.querySelector('.mobile__header-sign-in-js');
let inputSign = document.querySelector('.sign__input-js');

buttonSignMobile.addEventListener('click', function(){
  modalSign.classList.remove('sign__modal-hedden');
  inputSign.focus();
});

buttonSignOpen.addEventListener('click', function (){
   modalSign.classList.remove('sign__modal-hedden');
   inputSign.focus();
});

buttonSignClose.addEventListener('click', function (){
   modalSign.classList.add('sign__modal-hedden');
   buttonSignClose.focus(); 
 });

window.addEventListener('keydown', function(event){
  if(!modalSign.classList.contains('sign__modal-hedden') && event.code ==='Escape'){
      modalSign.classList.add('sign__modal-hedden');
      buttonSignOpen.focus();
  }
  
});

// Register modal //

let modalRegis = document.querySelector('.regis__modal-js');
let buttonRegisOpen = document.querySelector('.header__item-regis-js');
let buttonRegisClose = document.querySelector('.regis__close-js');
let buttonRegisMobile = document.querySelector('.mobile__header-register-js');
let inputRegis = document.querySelector('.regis__input-js');

buttonRegisMobile.addEventListener('click', function(){
  modalRegis.classList.remove('regis__modal-hedden');
  inputSign.focus();
});

buttonRegisOpen.addEventListener('click', function (){
  modalRegis.classList.remove('regis__modal-hedden');
  inputRegis.focus();
});

buttonRegisClose.addEventListener('click', function(){
  modalRegis.classList.add('regis__modal-hedden');
  buttonRegisClose.focus();
});

window.addEventListener('keydown',function(event){
  if(!modalRegis.classList.contains('regis__modal-hedden') && event.code === 'Escape'){
    modalRegis.classList.add('regis__modal-hedden');
    buttonRegisOpen.focus();
  }
});


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



//send message modal//

let modalMessage = document.querySelector('.message__modal-js');
let buttonMessageOpen = document.querySelector('.footer__message-js');
let buttonMessageClose = document.querySelector('.message__close-js');
let inputMessage = document.querySelector('.message__input-js');

buttonMessageOpen.addEventListener('click', function(){
  modalMessage.classList.remove('message__modal-hedden');
  inputMessage.focus();
});

buttonMessageClose.addEventListener('click', function (){
  modalMessage.classList.add('message__modal-hedden');
  buttonMessageClose.focus();
});

window.addEventListener('keydown', function(event){
  if(!modalMessage.classList.contains('message__modal-hedden') && event.code === 'Escape'){
    modalMessage.classList.add('message__modal-hedden');
    buttonMessageOpen.focus();
  }
});































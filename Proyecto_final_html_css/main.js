'use strict';

//Menu Mobile

const btnHamb = document.querySelector('.navbar__btn--hamb');
const menuMobile = document.querySelector('.navbar__menu');
const btnHambClose = document.querySelector('.btn_hamb--close')

btnHamb.addEventListener('click', () => {
    menuMobile.classList.add('active');
    btnHamb.classList.add('hidden');
    btnHambClose.classList.remove('hidden');
});

btnHambClose.addEventListener('click', () => {
    btnHambClose.classList.add('hidden')
    btnHamb.classList.remove('hidden');
    menuMobile.classList.remove('active');
})

// Login section

const loginModal = document.querySelector('.login');
const signupModal = document.querySelector('.signup');
const overlay = document.querySelector('.overlay');
const btnOpenLogin = document.querySelector('.navbar__btn--login');
const btnCloseLogin = document.querySelector('.login__close');
const btnOpenSignup = document.querySelector('.signup__btn');
const btnCloseSignup = document.querySelector('.signup__close');

const openLoginModal = () => {
    loginModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    menuMobile.classList.remove('active');
    
};

const closeModal = () => {
    loginModal.classList.add('hidden');
    overlay.classList.add('hidden');
    signupModal.classList.add('hidden');
    btnHambClose.classList.remove('active');
    btnHamb.classList.remove('hidden');
};

const openSignupModal = () => {
    loginModal.classList.add('hidden');
    signupModal.classList.remove('hidden');
}

btnOpenLogin.addEventListener('click', openLoginModal)
btnCloseLogin.addEventListener('click', closeModal);
btnOpenSignup.addEventListener('click', openSignupModal)
btnCloseSignup.addEventListener('click', closeModal);
overlay.addEventListener('click',  closeModal);


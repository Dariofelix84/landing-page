const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registrarLink = document.querySelector('.registrar-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger");
const headerWrapper = document.querySelector(".header-wrapper");

hamburger.addEventListener("click", () => {
    headerWrapper.classList.toggle("show-menu")
    sidebar.classList.toggle("sidebar-show")
});

registrarLink.addEventListener('click', () => {
    wrapper.classList.add('active')   
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    sidebar.classList.remove("sidebar-show")
    headerWrapper.classList.remove("show-menu")
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});


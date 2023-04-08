import pageLoad from "./modules/page-load";
import loadHome from "./modules/home";
import loadMenu from './modules/menu'
import loadContact from "./modules/contact";

function addNavEvents() {
    const logo = document.getElementById('logo');
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');
  
    logo.addEventListener('click', loadHome);
    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu)
    contactBtn.addEventListener('click', loadContact);
  }


function init() {
    pageLoad();
    loadHome();
    addNavEvents();
    
}

init();



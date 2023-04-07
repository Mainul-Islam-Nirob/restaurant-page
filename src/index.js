import pageLoad from "./modules/page-load";
import loadHome from "./modules/home";
import loadMenu from './modules/menu'
import loadContact from "./modules/contact";

function addNavEvents() {
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');
  
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



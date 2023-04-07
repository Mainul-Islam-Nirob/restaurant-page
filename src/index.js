import pageLoad from "./modules/page-load";
import loadHome from "./modules/home";
import loadContact from "./modules/contact";

function addNavEvents() {
    const homeBtn = document.getElementById('home');
    const contactBtn = document.getElementById('contact');
  
    homeBtn.addEventListener('click', loadHome);
    contactBtn.addEventListener('click', loadContact);
  }



function init() {
    pageLoad();
    loadHome();
    addNavEvents();
    
}

init();



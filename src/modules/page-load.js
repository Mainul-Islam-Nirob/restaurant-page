
function createNavigation(cls) {
    const navigation = document.createElement('div');
    navigation.classList.add(cls);


    //logo
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'Khuda Lagche';



    //nav-items
    const navItems = document.createElement('ul');
    navItems.classList.add('nav-items');


    //nav-item
    const home = document.createElement('li');
    home.classList.add('class', 'nav-item');
    home.textContent = 'Home';

    const menu = document.createElement('li');
    menu.classList.add('nav-item');
    menu.textContent = 'Menu';

    const contact = document.createElement('li');
    contact.classList.add('nav-item');
    contact.textContent = 'Contact';

    navItems.appendChild(home);
    navItems.appendChild(menu);
    navItems.appendChild(contact);

    navigation.appendChild(logo);
    navigation.appendChild(navItems);

    return navigation
}

function pageLoad() {
    const content = document.getElementById('content');

    const navigation = createNavigation('navigation')
    content.appendChild(navigation);  
}

export default pageLoad;
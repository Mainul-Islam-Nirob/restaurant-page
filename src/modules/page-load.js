function createLogo(cls, txt) {
    const logo = document.createElement('div');
    logo.setAttribute('id', 'logo');
    logo.classList.add(cls);
    logo.textContent = txt;

    return logo
}

function createNavItem(cls, id, txt) {
    const navItem = document.createElement('li');
    navItem.setAttribute('id', id)
    navItem.classList.add(cls);
    navItem.textContent = txt;

    return navItem;
}

function createNavigation(cls) {
    const navigation = document.createElement('div');
    navigation.classList.add(cls);

    const logo = createLogo('logo', 'Khuda Lagche');
    
    const navItems = document.createElement('ul');
    navItems.classList.add('nav-items');

    //nav-items
    const home = createNavItem('nav-item', 'home', 'Home');
    const menu = createNavItem('nav-item', 'menu', 'Menu');
    const contact = createNavItem('nav-item', 'contact', 'Contact');

    navItems.appendChild(home);
    navItems.appendChild(menu);
    navItems.appendChild(contact);

    navigation.appendChild(logo);
    navigation.appendChild(navItems);

    return navigation
}

function createMain(id) {
    const main = document.createElement('div');
    main.setAttribute('id', id);

    return main;
}

function createFooter(cls) {
    const footer = document.createElement('div');
    footer.classList.add(cls);
    footer.innerText = "Copyright 2023 ©"

    const githubLink = document.createElement('a');
    githubLink.setAttribute('href', 'https://github.com/Mainul-Islam-Nirob');
    githubLink.innerText = 'Mainul Islam';

    footer.appendChild(githubLink);

    return footer;

}

function pageLoad() {
    const content = document.getElementById('content');

    //Navigation Section
    const navigation = createNavigation('navigation')
    content.appendChild(navigation);

    // Main Section
    const main = createMain('main');
    content.appendChild(main);

    //Footer Section
    const footer = createFooter('footer');
    content.appendChild(footer);
}

export default pageLoad;
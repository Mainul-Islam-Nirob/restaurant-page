import activeNav from "./activeNav";
import deActiveNav from "./deActiveNav";

function createMenuHeading(params) {
    const menuHeading = document.createElement('div');
    menuHeading.classList.add('menu-heading');

    const title = document.createElement('h3');
    title.innerText = 'What is your food mood?';

    const subTitle = document.createElement('p');
    subTitle.innerText = 'Feeling light & crisp or seriously hungry?';

    menuHeading.appendChild(title);
    menuHeading.appendChild(subTitle);

    return menuHeading;
}

function createMenuItem(src, name, details ) {
    //container
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    //image
    const menuImg = document.createElement('div');
    menuImg.classList.add('menu-img');
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', name);
    menuImg.appendChild(img);

    //details
    const menuDetails = document.createElement('div');
    menuDetails.classList.add('menu-details');
    const h4 = document.createElement('h4');
    h4.classList.add('food-name');
    h4.innerText = name;

    const p = document.createElement('p');
    p.classList.add('details');
    p.innerText = details;

    const button = document.createElement('button');
    button.classList.add('order-btn');
    button.innerText = 'Order';

    menuDetails.appendChild(h4);
    menuDetails.appendChild(p);
    menuDetails.appendChild(button);

    menuItem.appendChild(menuImg);
    menuItem.appendChild(menuDetails);

    return menuItem;
}

// Containr
function createMenuItems() {
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    // menuItems.appendChild(createMenuItem());

    menuItems.appendChild(createMenuItem('./images/menu8.png', 'Fish and Chips', 'A classic British dish featuring golden-brown beer-battered cod fillets served with crispy French fries, tangy tartar sauce, and a wedge of lemon.'));

    menuItems.appendChild(createMenuItem('./images/menu7.png', 'Margherita Pizza', 'Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.'));

    menuItems.appendChild(createMenuItem('./images/menu6.png', 'Lobster Roll', 'A New England classic featuring tender chunks of succulent lobster meat tossed with creamy mayonnaise and celery, served in a toasted buttered roll.'));

    menuItems.appendChild(createMenuItem('./images/menu5.png', 'Vegetable Stir-Fry', 'A colorful medley of fresh vegetables stir-fried to perfection and served over a bed of fluffy rice, with a savory soy-ginger sauce on top.'));

    menuItems.appendChild(createMenuItem('./images/menu8.png', 'Fish and Chips', 'A classic British dish featuring golden-brown beer-battered cod fillets served with crispy French fries, tangy tartar sauce, and a wedge of lemon.'));

    menuItems.appendChild(createMenuItem('./images/menu6.png', 'Lobster Roll', 'A New England classic featuring tender chunks of succulent lobster meat tossed with creamy mayonnaise and celery, served in a toasted buttered roll.'));

    menuItems.appendChild(createMenuItem('./images/menu7.png', 'Margherita Pizza', 'Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.'));
    return menuItems;
}


function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuHeading());
    menu.appendChild(createMenuItems());
    console.log(menu, 'menu*');
    return menu;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu()); 
    deActiveNav();  //remove active class from all nav item
    activeNav('menu'); // add for menu

}

export default loadMenu;
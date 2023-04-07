function createContact() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const title = document.createElement('h2');
    title.innerText = 'Contact';

    const phn = document.createElement('span');
    phn.classList.add('phn');
    phn.innerText = '+880239209230';

    const email = document.createElement('span');
    email.classList.add('email');
    email.innerText = 'khuda.lagche@gmail.com';

    const location = document.createElement('span');
    location.classList.add('location');
    location.innerText = 'BSMRSTU, Gopalganj, Dhaka, Bangladesh';

    contactContainer.appendChild(title);
    contactContainer.appendChild(phn);
    contactContainer.appendChild(email);
    contactContainer.appendChild(location);

    return contactContainer;
}

function loadContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    contact.appendChild(createContact());

    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(contact);
}

export default loadContact;
function createHome () {
    const home = document.createElement('div');
    home.classList.add('home');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = "Savor the Flavor";

    const subTitle = document.createElement('p');
    subTitle.classList.add('sub-title');
    subTitle.innerText = "Discover a World of Tastes with Our Delectable Menu";

    home.appendChild(title);
    home.appendChild(subTitle);

    return home;

}

function loadHome() {
    const main = document.getElementById("main");
    // main.innerContent = "";
    main.appendChild(createHome());
}
export default loadHome;
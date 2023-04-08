(()=>{"use strict";function e(e,t,n){const a=document.createElement("li");return a.setAttribute("id",t),a.classList.add(e),a.textContent=n,a}const t=function(e){document.getElementById(e).classList.add("active")},n=function(){document.getElementById("home").classList.remove("active"),document.getElementById("menu").classList.remove("active"),document.getElementById("contact").classList.remove("active")},a=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("h1");t.classList.add("title"),t.innerText="Savor the Flavor";const n=document.createElement("p");return n.classList.add("sub-title"),n.innerText="Discover a World of Tastes with Our Delectable Menu",e.appendChild(t),e.appendChild(n),e}()),n(),t("home")};function d(e,t,n){const a=document.createElement("div");a.classList.add("menu-item");const d=document.createElement("div");d.classList.add("menu-img");const c=document.createElement("img");c.setAttribute("src",e),c.setAttribute("alt",t),d.appendChild(c);const i=document.createElement("div");i.classList.add("menu-details");const s=document.createElement("h4");s.classList.add("food-name"),s.innerText=t;const o=document.createElement("p");o.classList.add("details"),o.innerText=n;const l=document.createElement("button");return l.classList.add("order-btn"),l.innerText="Order",i.appendChild(s),i.appendChild(o),i.appendChild(l),a.appendChild(d),a.appendChild(i),a}const c=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(function(e){const t=document.createElement("div");t.classList.add("menu-heading");const n=document.createElement("h3");n.innerText="What is your food mood?";const a=document.createElement("p");return a.innerText="Feeling light & crisp or seriously hungry?",t.appendChild(n),t.appendChild(a),t}()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu-items"),e.appendChild(d("./images/menu8.png","Fish and Chips","A classic British dish featuring golden-brown beer-battered cod fillets served with crispy French fries, tangy tartar sauce, and a wedge of lemon.")),e.appendChild(d("./images/menu7.png","Margherita Pizza","Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.")),e.appendChild(d("./images/menu6.png","Lobster Roll","A New England classic featuring tender chunks of succulent lobster meat tossed with creamy mayonnaise and celery, served in a toasted buttered roll.")),e.appendChild(d("./images/menu5.png","Vegetable Stir-Fry","A colorful medley of fresh vegetables stir-fried to perfection and served over a bed of fluffy rice, with a savory soy-ginger sauce on top.")),e.appendChild(d("./images/menu8.png","Fish and Chips","A classic British dish featuring golden-brown beer-battered cod fillets served with crispy French fries, tangy tartar sauce, and a wedge of lemon.")),e.appendChild(d("./images/menu6.png","Lobster Roll","A New England classic featuring tender chunks of succulent lobster meat tossed with creamy mayonnaise and celery, served in a toasted buttered roll.")),e.appendChild(d("./images/menu7.png","Margherita Pizza","Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.")),e}()),console.log(e,"menu*"),e}()),n(),t("menu")},i=function(){const e=document.createElement("div");e.classList.add("contact"),e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact-container");const t=document.createElement("h2");t.innerText="Contact";const n=document.createElement("span");n.classList.add("phn"),n.innerText="📞 +880239209230";const a=document.createElement("span");a.classList.add("email"),a.innerText="📧 khuda.lagche@gmail.com";const d=document.createElement("span");return d.classList.add("location"),d.innerText="🏠 BSMRSTU, Gopalganj, Dhaka, Bangladesh",e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(d),e}());const a=document.getElementById("main");a.textContent="",a.appendChild(e),n(),t("contact")};(function(){const t=document.getElementById("content"),n=function(t){const n=document.createElement("div");n.classList.add(t);const a=function(e,t){const n=document.createElement("div");return n.setAttribute("id","logo"),n.classList.add("logo"),n.textContent="Khuda Lagche",n}(),d=document.createElement("ul");d.classList.add("nav-items");const c=e("nav-item","home","Home"),i=e("nav-item","menu","Menu"),s=e("nav-item","contact","Contact");return d.appendChild(c),d.appendChild(i),d.appendChild(s),n.appendChild(a),n.appendChild(d),n}("navigation");t.appendChild(n);const a=function(e){const t=document.createElement("div");return t.setAttribute("id","main"),t}();t.appendChild(a);const d=function(e){const t=document.createElement("div");t.classList.add("footer"),t.innerText="Copyright 2023 ©";const n=document.createElement("a");return n.setAttribute("href","https://github.com/Mainul-Islam-Nirob"),n.innerText="Mainul Islam",t.appendChild(n),t}();t.appendChild(d)})(),a(),function(){const e=document.getElementById("logo"),t=document.getElementById("home"),n=document.getElementById("menu"),d=document.getElementById("contact");e.addEventListener("click",a),t.addEventListener("click",a),n.addEventListener("click",c),d.addEventListener("click",i)}()})();
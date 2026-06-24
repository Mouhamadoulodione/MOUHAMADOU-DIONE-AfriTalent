// DARK MODE

const darkBtn = document.getElementById("theme-toggle")

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

});


// NAVBAR DYNAMIQUE

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("navbar-scroll");
    }else{
        navbar.classList.remove("navbar-scroll");
    }

});


// RETOUR EN HAUT

const topBtn = document.getElementById("btnTop")

window.addEventListener("scroll", function(){

    if(window.scrollY > 200){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", function(){

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
const sections = document.querySelectorAll(".fade-section");

window.addEventListener("scroll", function(){

    sections.forEach(function(section){

        const position = section.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;

        if(position < screenPosition){

            section.classList.add("show");

        }

    });

});
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const message = document.getElementById("message");

        if (message.value.trim().length < 20) {

            alert("Le message doit contenir au moins 20 caractères");
            return;
        }

        document
            .getElementById("successMessage")
            .classList.remove("d-none");

        contactForm.reset();

    });

}

let btnDev = document.getElementById("btnDev");
let btnDesign = document.getElementById("btnDesign");
let btnMarketing = document.getElementById("btnMarketing");
let btnTous = document.getElementById("btnTous");

let cartes = document.querySelectorAll(".freelancer-card");

btnTous.onclick = function() {
    location.reload();
};

btnDev.onclick = function() {
    cartes.forEach(function(carte) {
        if (carte.getAttribute("data-category") == "web") {
            carte.style.display = "block";
        } else {
            carte.style.display = "none";
        }
    });
};

btnDesign.onclick = function() {
    cartes.forEach(function(carte) {
        if (carte.getAttribute("data-category") == "design") {
            carte.style.display = "block";
        } else {
            carte.style.display = "none";
        }
    });
};

btnMarketing.onclick = function() {
    cartes.forEach(function(carte) {
        if (carte.getAttribute("data-category") == "marketing") {
            carte.style.display = "block";
        } else {
            carte.style.display = "none";
        }
    });
};
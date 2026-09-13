// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("show");
});


// Close menu when clicking a link

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        nav.classList.remove("show");
    });

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

window.addEventListener("scroll", function () {

    const sections = document.querySelectorAll("section");

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
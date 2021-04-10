const navBarToggle = document.querySelector(".nav-bar-toggle");
const navBarMenu = document.querySelector(".nav-links");
const navBarDropDown = document.querySelectorAll(".nav-links li");

navBarToggle.addEventListener("click", navBarToggler);
navBarDropDown.forEach(Element => Element.addEventListener("click", navBarDropDownToggler));

function navBarToggler () {
    navBarToggle.classList.toggle("open-toggle");
    navBarMenu.classList.toggle("open")
}

function navBarDropDownToggler() {
     if (navBarMenu.contains("open")) {
         navBarToogle.click();
    };
}
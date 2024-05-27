var navLinks = document.getElementById("menu-links");
var show = document.getElementById("show");
var hide = document.getElementById('hide');

function hideMenu() {
    navLinks.style.right = "-200px"; // Adjust this value according to your menu width
    show.style.display = "block";
    hide.style.display = "none";
}

function showMenu() {
    navLinks.style.right = "0";
    show.style.display = "none";
    hide.style.display = "block";
}

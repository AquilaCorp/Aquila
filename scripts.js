// Ajoutez des interactions dynamiques si nécessaire
document.querySelector('.cta-button').addEventListener('click', function() {
    window.scrollTo({
        top: document.querySelector('#about').offsetTop,
        behavior: 'smooth'
    });
});
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var aboutSection = document.getElementById("about");

    // Obtenez la position du haut de la section 'about'
    var aboutSectionTop = aboutSection.getBoundingClientRect().top;

    if (aboutSectionTop <= 0) {
        // Lorsque l'utilisateur est dans la section 'about'
        header.style.backgroundColor = "#000000"; // Fond noir
    } else {
        // Lorsque l'utilisateur est encore dans la section 'home'
        header.style.backgroundColor = "transparent"; // Fond transparent
    }
});

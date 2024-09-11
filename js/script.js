let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";


function toggleMenu(){
    if (menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px";
    }else{
        menuList.style.maxHeight = "0px";
    }
}


// scroll automatico navbar

document.querySelectorAll('#menuList a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Evita el comportamiento por defecto del enlace
        const targetId = this.getAttribute('data-target');  // Obtiene el ID de la sección

        const targetElement = document.getElementById(targetId);  // Obtiene la sección correspondiente
        
        // Realiza un desplazamiento suave a la sección
        window.scrollTo({
            top: targetElement.offsetTop,  // Desplaza a la posición de la sección
            behavior: 'smooth'  // Desplazamiento suave
        });
    });
});

document.querySelectorAll('#footer-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Evita el comportamiento por defecto del enlace
        const targetId = this.getAttribute('data-target');  // Obtiene el ID de la sección

        const targetElement = document.getElementById(targetId);  // Obtiene la sección correspondiente
        
        // Realiza un desplazamiento suave a la sección
        window.scrollTo({
            top: targetElement.offsetTop,  // Desplaza a la posición de la sección
            behavior: 'smooth'  // Desplazamiento suave
        });
    });
});

// div expandible

function toggleCardContent(headerElement) {
    const card = headerElement.parentElement;
    const content = card.querySelector('.card-content');

    card.classList.toggle('expanded');

    if (card.classList.contains('expanded')) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = null;
    }
}


// flecha flotante

window.onscroll = function() {
    var flecha = document.querySelector('.flecha-flotante');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        flecha.style.display = "block";
    } else {
        flecha.style.display = "none";
    }
};


// imagenes screen

function cambiarImagenSegunPantalla() {
    var img = document.getElementById("imagen-carousel-1");
    if (window.innerWidth <= 522) { // Si la pantalla es menor de 600px
        img.src = "imagenes/car-item-4-522px.png";
    } else {
        img.src = "imagenes/car-item-4.png";
    }
}

// Llama a la función cuando se carga la página
cambiarImagenSegunPantalla();

// Añade un listener para cambiar la imagen cuando se redimensiona la ventana
window.addEventListener("resize", cambiarImagenSegunPantalla);


// lightbox

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.product-img').forEach(image => {
        image.addEventListener('click', function() {
            var lightbox = document.getElementById('lightbox');
            var lightboxImg = document.getElementById('lightbox-img');
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
        });
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'none';
});

document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target !== document.getElementById('lightbox-img')) {
        this.style.display = 'none';
    }
});
// Función para mostrar la sección correspondiente
function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Agregar eventos a los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSectionId = this.getAttribute('href').substring(1); // Obtiene el id de la sección
        showSection(targetSectionId);
    });
});

// Cambiar imagen de galería
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainImage');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        mainImage.src = this.src; // Cambia la imagen principal por la de la miniatura
    });
});
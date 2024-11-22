// Función para abrir/cerrar el submenú al hacer clic en "Pagina"
document.querySelector('.submenu-container .menu-item').addEventListener('click', function() {
    this.parentElement.classList.toggle('active');
});

// Mostrar/Ocultar el contenido adicional cuando se hace clic en "Leer más"
document.getElementById("leer-mas").addEventListener("click", function() {
    const contenido = document.getElementById("contenido-extra");
    if (contenido.style.display === "none" || contenido.style.display === "") {
        contenido.style.display = "block";
        this.textContent = "Leer menos";  // Cambiar el texto del botón
    } else {
        contenido.style.display = "none";
        this.textContent = "Leer más";  // Restaurar el texto del botón
    }
});

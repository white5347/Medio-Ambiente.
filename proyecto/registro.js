// Script para manejar la visualización de los formularios

document.addEventListener('DOMContentLoaded', function () {
    const enlaceRestablecer = document.getElementById('restablecer-enlace');
    const contenidoRestablecer = document.getElementById('restablecer-contenido');
    const enlaceVolver = document.getElementById('volver-enlace');
    const formularioRegistro = document.getElementById('formulario-registro');

    // Mostrar el formulario para restablecer contraseña
    enlaceRestablecer.addEventListener('click', function (e) {
        e.preventDefault();
        formularioRegistro.style.display = 'none'; // Ocultar el formulario de registro
        contenidoRestablecer.style.display = 'block'; // Mostrar el formulario de restablecer
    });

    // Volver al formulario de registro
    enlaceVolver.addEventListener('click', function (e) {
        e.preventDefault();
        formularioRegistro.style.display = 'block'; // Mostrar el formulario de registro
        contenidoRestablecer.style.display = 'none'; // Ocultar el formulario de restablecer
    });
});

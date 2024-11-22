document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validación simple
    if (name && email && message) {
        // Si todo está correcto, mostramos el mensaje de éxito
        document.getElementById('responseMessage').innerHTML = `
            <p>Gracias por tu mensaje, ${name}. Te responderemos lo antes posible.</p>
        `;
        document.getElementById('responseMessage').classList.remove('error');
        document.getElementById('responseMessage').classList.add('success');

        // Limpiar el formulario
        document.getElementById('contactForm').reset();
    } else {
        // Si hay campos vacíos, mostramos un mensaje de error
        document.getElementById('responseMessage').innerHTML = `
            <p>Por favor, completa todos los campos del formulario.</p>
        `;
        document.getElementById('responseMessage').classList.remove('success');
        document.getElementById('responseMessage').classList.add('error');
    }
});

// Funcionalidad para el botón de resetear el formulario
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('contactForm').reset();
    document.getElementById('responseMessage').innerHTML = '';  // Limpiar el mensaje de respuesta
});
document.getElementById('topLeftButton').addEventListener('click', function() {
    window.location.href = 'index.html';  // Reemplaza 'index.html' con la ruta a tu página principal
});

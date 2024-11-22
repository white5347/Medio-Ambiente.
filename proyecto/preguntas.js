// Obtenemos todas las preguntas
const preguntas = document.querySelectorAll('.pregunta');

// Añadimos un evento de clic a cada pregunta
preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        // Alternamos la clase 'active' para mostrar u ocultar la respuesta
        pregunta.classList.toggle('active');
    });
});

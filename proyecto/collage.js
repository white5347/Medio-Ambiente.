document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');
    const closeBtn = document.getElementById('close');
    const sendButton = document.getElementById('send-button');
    const modalText = document.getElementById('modal-text');
    const images = document.querySelectorAll('.collage-img');

    // Mostrar imagen en el modal
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            caption.textContent = this.alt;
            modalText.value = ''; // Limpiar el área de texto al abrir una nueva imagen
        });
    });

    // Cerrar el modal cuando se haga clic en la "X"
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera del modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Función para manejar el envío del texto
    sendButton.addEventListener('click', function() {
        const text = modalText.value;
        if (text.trim() !== '') {
            alert(`¡Texto enviado!\n${text}`);
            modalText.value = ''; // Limpiar el área de texto después de enviar
        } else {
            alert('Por favor, escribe algo antes de enviar.');
        }
    });
});

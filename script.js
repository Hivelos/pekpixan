document.getElementById('infoBtn').addEventListener('click', function() {
    const info = document.getElementById('info');
    if (info.classList.contains('hidden')) {
        info.classList.remove('hidden');
        this.textContent = 'Ocultar Información';
    } else {
        info.classList.add('hidden');
        this.textContent = 'Más Información';
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje, nos pondremos en contacto pronto.');
});

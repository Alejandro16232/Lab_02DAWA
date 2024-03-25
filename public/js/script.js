document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log(`Nombre: ${name}, Email: ${email}, Mensaje: ${message}`);
        alert('Formulario enviado con éxito. ¡Muy pronto nos pondremos en contacto contigo!');
        contactForm.reset();
    });
});

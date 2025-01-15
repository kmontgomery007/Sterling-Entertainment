
// Form submission handler script
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const name = document.querySelector('#name').value.trim();
        const message = document.querySelector('#message').value.trim();
        if (name === '' || message === '') {
            alert('Please fill in all required fields.');
            event.preventDefault();
        } else {
            console.log('Form submitted successfully!');
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent. Thank you!');
    document.getElementById('contact-form').reset();
});

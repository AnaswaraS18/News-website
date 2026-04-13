// Add an event listener to run code after the HTML content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Simple Alert functionality on button click (Home Page)
    const alertBtn = document.getElementById('alertBtn');
    if (alertBtn) {
        alertBtn.addEventListener('click', function() {
            alert('Welcome to Global News! Thank you for visiting.');
        });
    }

    // 2. Basic form validation (Contact Page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission (which reloads the page)
            event.preventDefault();
            
            // Get values from input fields
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorMessage = document.getElementById('error-message');
            
            // Validation: Check if fields are empty
            if (username === '' || email === '' || password === '') {
                // Show error message
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'Error: All fields are required.';
                errorMessage.style.color = 'red';
            } else {
                // Hide error message and show a success alert
                errorMessage.style.display = 'none';
                alert('Registration successful! Welcome, ' + username + '.');
                contactForm.reset(); // Clear the form fields
            }
        });
    }
});

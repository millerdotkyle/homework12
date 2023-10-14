// public/js/login.js
const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();

    if (email && password) {
        console.log(email, password);
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to log in.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
};

document.querySelector('#loginForm').addEventListener('submit', loginFormHandler);
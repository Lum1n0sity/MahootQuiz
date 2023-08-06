document.addEventListener('DOMContentLoaded', function() {
    const login_btn = document.getElementById('Login');
    login_btn.addEventListener('click', send_login_data);

    function send_login_data() {
        const input_username = document.getElementById('').value;
        const input_password = document.getElementById('').value;

        fetch('http://localhost:3000/API/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: input_username, password: input_password })
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }
});
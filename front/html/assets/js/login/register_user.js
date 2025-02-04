/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** register_user.js
*/

async function register_user() {
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const password_confirmation = document.getElementById("registerPasswordConfirmation").value;

    if (password !== password_confirmation) {
        update_error_message("Passwords do not match !");
        return;
    }

    console.log("passwords match");

    const response = await window.update_server.register(username, email, password);

    console.log(`register: JSON response: ${JSON.stringify(response)}`);

    if (response.ok) {
        console.log("Registration successful:", response);
        window.location.href = window.constants.dashboard_page;
    } else {
        update_error_message("Registration failed: " + response.message);
    }
}

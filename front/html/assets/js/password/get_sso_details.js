/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** get_sso_details.js
*/

async function get_sso_details() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const user_username_cookie_name = window.constants.user_username_cookie_name || "username";
    const passwordConfirmation = document.getElementById("loginPasswordConfirmation").value;

    if (password !== passwordConfirmation) {
        update_error_message("Passwords do not match.");
        return;
    }

    const response = await window.update_server.provide_missing_sso_info(username, password);
    if (response.ok) {
        console.log("Registration successful:", response);
        window.cookie_manager.create(user_username_cookie_name, username);
        window.location.href = window.constants.dashboard_page;
    } else {
        update_error_message("Registration failed: " + response.message);
        window.location.href = window.constants.home_page;
    }
};

function inject_submit_actions() {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        get_sso_details();
    });
}

// Add a a rule to only run once the page is loaded
document.addEventListener("DOMContentLoaded", inject_submit_actions);

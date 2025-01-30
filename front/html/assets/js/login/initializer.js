/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** initializer.js
*/

function inject_submit_actions() {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        log_user_in();
    });
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault();
        register_user();
    });
}

// Add a a rule to only run once the page is loaded
document.addEventListener("DOMContentLoaded", inject_submit_actions);

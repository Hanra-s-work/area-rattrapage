/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** update_error_message.js
*/

function update_error_message(message) {
    const error_message = document.getElementById("error_message");
    error_message.innerHTML = message;
    error_message.style.display = "block";
}

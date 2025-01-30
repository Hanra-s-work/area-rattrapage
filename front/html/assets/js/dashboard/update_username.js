/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** update_username.js
*/

function update_username(element) {
    console.log("update_username called");
    element.innerText = "Sample User";
    const username = window.cookie_manager.read(window.constants.user_username_cookie_name);
    if (username) {
        element.innerText = username;
    }
    console.log("update_username finished");
}

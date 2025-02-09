/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** refresh.js
*/

function update(elem) {
    console.log("update called");
    let refresh_value = elem.value;
    console.log(`refresh_value: ${refresh_value}`);
    window.cookie_manager.remove(window.constants.user_refresh_wigets_cookie_name);
    window.cookie_manager.create(window.constants.user_refresh_wigets_cookie_name, refresh_value);
}

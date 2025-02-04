/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** logout.js
*/

async function logout() {
    console.log("logout called");
    const response = await window.update_server.log_user_out();
    if (response.ok) {
        console.log("Logout successful:", response);
    } else {
        console.log("Logout failed:", response);
    }
    window.cookie_manager.remove(window.constants.user_token_cookie_name);
    window.cookie_manager.remove(window.constants.user_username_cookie_name);
    window.cookie_manager.remove(window.constants.user_id_cookie_name);
    window.indexedDB_manager.remove(window.constants.widget_cookie_name);
    window.location.href = window.constants.home_page;
    console.log("logout finished");
}

/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** logout.js
*/

async function logout() {
    console.log("logout called");
    await window.update_server.log_user_out();
    window.cookie_manager.remove("token");
    window.cookie_manager.remove("username");
    window.cookie_manager.remove("user_id");
    window.location.href = "/";
    console.log("logout finished");
}

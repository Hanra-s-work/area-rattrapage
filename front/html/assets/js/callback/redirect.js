/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** redirect.js
*/

async function check_callback() {
    const url = window.location.href;
    const user_password = window.constants.user_password || "/password";
    const about_user = window.constants.about_user || "/user/about";
    const user_id_cookie_name = window.constants.user_id_cookie_name || "user_id";
    const user_token_cookie_name = window.constants.user_token_cookie_name || "user_token";
    const user_username_cookie_name = window.constants.user_username_cookie_name || "username";
    const home_page = window.constants.home_page || "/";
    const dashboard_page = window.constants.dashboard_page || "/dashboard";
    const oauth_callback = window.constants.oauth_callback || "/oauth/callback";
    const node = url.split("?")[1];
    var data = "";
    for (var i = 0; i < node.length; i++) {
        if (node[i] === "%" && node[i + 1] === "3" && node[i + 2] === "A") {
            i += 2;
            data += ":";
        } else {
            data += node[i];
        }
    }
    console.log("Data:", data);
    console.log(`Sending request to ${oauth_callback}`);
    const resp = await window.querier.post(oauth_callback, { "code": data });
    console.log("Response gathered");
    console.log("Response:", resp);
    console.log(`Response Json: ${JSON.stringify(resp)}`);
    if (resp.status === 200) {
        console.log("Login successful");
        const token = resp.resp.token;
        console.log("Token:", token);
        window.cookie_manager.create(user_token_cookie_name, token);
        const user_info = await window.querier.get(about_user, {}, token);
        console.log("User info:", user_info);
        if (user_info.status != 200) {
            console.log("Login failed");
            logout();
            window.location.href = home_page;
            return;
        }
        const user_id = user_info.resp.id;
        const user_name = user_info.resp.username;
        const user_email = user_info.resp.email;
        window.cookie_manager.create(user_id_cookie_name, user_id);
        console.log("username:", user_name);
        console.log("email:", user_email);
        console.log(`typeof username: ${typeof user_name}`);
        console.log(`typeof email: ${typeof user_email}`);
        if (!user_name || user_name === "" || user_name === "undefined" || user_name === "null" || user_name === null || user_name === undefined) {
            console.log(`Redirecting to ${user_password}`);
            window.location.href = user_password;
            return;
        }
        window.cookie_manager.create(user_username_cookie_name, user_name);
        console.log(`Redirecting to ${dashboard_page}`);
        window.location.href = dashboard_page;
    } else {
        console.log("Login failed");
        window.location.href = home_page;
    }
}

document.addEventListener("DOMContentLoaded", check_callback);

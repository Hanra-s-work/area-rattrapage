/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** update_server.mjs
*/

console.log("js/manage_server initialising");
// Module in charge of managing the communications between the server and the client

async function register(username, email, password) {
    console.log("register called");
    console.log("username:", username);
    console.log("email:", email);
    console.log("password:", password);
    let response = await window.querier.post("/register", { username, email, password });
    console.log("response:", response);
    console.log(`(register, before response) JSON response: ${JSON.stringify(response)}`);
    if (response.ok) {
        const user_id = response.resp.id;
        const user_token = response.resp.token;
        const user_username = response.resp.username;
        console.log(`user_id: ${user_id}, user_token: ${user_token}, user_username: ${user_username}`);
        if (user_id && user_token && user_username) {
            window.cookie_manager.create(window.constants.user_id_cookie_name, user_id);
            window.cookie_manager.create(window.constants.user_token_cookie_name, user_token);
            window.cookie_manager.create(window.constants.user_username_cookie_name, user_username);
            response.success = true;
            response.ok = true;
            return response;
        } else {
            response.success = false;
            response.ok = false;
        }
    } else {
        response.success = false;
        response.ok = false;
    }
    console.log("response:", response);
    console.log(`JSON response: ${JSON.stringify(response)}`);
    console.log("register finished");
    return response;
};

async function login(email, password) {
    console.log("login called");
    console.log("email:", email);
    console.log("password:", password);
    let response = await window.querier.post(`${window.constants.user_login_endpoint}`, { email, password });
    console.log("response:", response);
    console.log(`JSON response: ${JSON.stringify(response)}`);
    console.log("login finished");
    if (response.ok) {
        const user_id = response.resp.id;
        const user_token = response.resp.token;
        const user_username = response.resp.username;
        console.log(`user_id: ${user_id}, user_token: ${user_token}, user_username: ${user_username}`);
        if (user_token && user_id && user_username) {
            window.cookie_manager.create(window.constants.user_id_cookie_name, user_id);
            window.cookie_manager.create(window.constants.user_token_cookie_name, user_token);
            window.cookie_manager.create(window.constants.user_username_cookie_name, user_username);
            response.success = true;
            response.ok = true;
            return response;
        } else {
            response.success = false;
        }
    } else {
        response.success = false;
        response.ok = false;
    }
    console.log("response:", response);
    console.log("login finished");
    return response;
};

async function provide_missing_sso_info(username, password) {
    const token = window.cookie_manager.read(window.constants.user_token_cookie_name);
    if (!token) {
        console.log("provide_missing_sso_info failed user is not logged in!");
        return { "status": 401, "data": null };
    }
    const response = await window.querier.post(window.constants.provide_missing_sso_info_endpoint, { username, password }, token);
    return response;
}

async function get_available_widgets() {
    const token = window.cookie_manager.read(window.constants.user_token_cookie_name);
    const widgets = await window.querier.get(window.constants.widget_name_list_endpoint, {}, token);
    console.log(`Available widgets ${JSON.stringify(widgets)}`);
    return widgets;
};

async function get_user_widgets() {
    console.log("get_user_widgets called");
    const token = window.cookie_manager.read(window.constants.user_token_cookie_name);
    const user_widgets = await window.querier.get(window.constants.widget_get_user_widgets_endpoint, {}, token);
    return user_widgets;
};

async function get_widget_content(widget_name) {
    console.log("manage_server.get_widget_content called");
    const token = window.cookie_manager.read(window.constants.user_token_cookie_name);
    const widgets = await window.querier.get(`${window.constants.widget_get_widget_content}/${widget_name}`, {}, token);
    console.log("widgets:", JSON.stringify(widgets));
    console.log("Looking for widget");
    if (widgets.status !== 200) {
        if (widgets.status === 404) {
            return { "status": 404, "data": widgets.resp };
        } else {
            return { "status": 404, "data": null };
        }
    }
    const resp = widgets.resp;
    console.log("manage_server.get_widget_content finished");
    return { "status": 200, "data": resp };
};

async function add_widget_to_user(widget_type, widget_option = null) {
    console.log("add_widget_to_user called");
    const token = window.cookie_manager.read(window.constants.user_token_cookie_name);
    let option = "";
    if (widget_option !== null) {
        option = `/${widget_option}`;
    }
    const resp = await window.querier.post(`${window.constants.add_user_widget_endpoint}/${widget_type}${option}`, {}, token);
    console.log("resp = ", resp);
    console.log(`JSON resp = ${JSON.stringify(resp)}`);
    console.log("add_widget_to_user finished");
}

async function update_user_widgets(widget_index, widget_type, widget_position = null) {
    console.log("update_user_widgets called");
    const token = window.cookie_manager.read(window.constants.user_token_cookie_name);
    let position = {};
    if (widget_position) {
        position = { "location": widget_position };
    }
    const response = await window.querier.patch(`${window.constants.widget_update_user_widget_endpoint}/${widget_index}/${widget_type}`, position, token);
    console.log("update_user_widgets finished");
    return response;
};

async function remove_user_widget(name, widget_id) {
    console.log("remove_user_widgets called");
    const token = window.cookie_manager.read(window.constants.user_token_cookie_name);
    await window.querier.delete_query(`${window.constants.add_user_widget_endpoint}/${widget_id}`, {}, token);
    console.log("remove_user_widgets finished");
};

async function log_user_out() {
    console.log("log_user_out called");
    const token = window.cookie_manager.read(window.constants.user_token_cookie_name);
    if (!token) {
        return true;
    }
    const response = await window.querier.delete_query(window.constants.logout_page, {}, token);
    if (response.status === 200) {
        console.log("log_user_out finished");
        return true;
    }
    return false;
};

async function update_refresh(refresh_value) {
    console.log("update_refresh called");
    console.log("refresh_value:", refresh_value);
    const token = window.cookie_manager.read(window.constants.user_token_cookie_name);
    const response = await window.querier.post(`${window.constants.user_refresh_wigets_endpoint}/${refresh_value}`, {}, token);
    console.log("response:", response);
    console.log("update_refresh finished");
}

async function get_refresh() {
    console.log("get_refresh called");
    const token = window.cookie_manager.read(window.constants.user_token_cookie_name);
    const response = await window.querier.get(window.constants.user_refresh_wigets_endpoint, {}, token);
    console.log("JSON response:", JSON.stringify(response));
    console.log("response:", response);
    console.log("get_refresh finished");
    if (response.status !== 200) {
        console.log("Failed to get refresh value");
        return null;
    }
    console.log("get_refresh finished with response", response.resp);
    return response.resp;
}


const update_server = {
    login,
    register,
    get_refresh,
    log_user_out,
    update_refresh,
    get_user_widgets,
    remove_user_widget,
    add_widget_to_user,
    get_widget_content,
    update_user_widgets,
    get_available_widgets,
    provide_missing_sso_info,
}

export { update_server };

window.update_server = update_server;

console.log("js/manage_server initialised");

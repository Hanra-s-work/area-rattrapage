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
    // let response = await window.querier.post("/register", { username, email, password });
    let response = {
        "success": true,
        "message": "Registration successful",
        "resp": {
            "id": 0,
            "username": username
        },
        "token": "token"
    };
    if (response.success) {
        if (response.token) {
            window.cookie_manager.create(window.constants.user_token_cookie_name, response.token);
        } else {
            response.success = false;
        }
        if (response.resp) {
            window.cookie_manager.create(window.constants.user_id_cookie_name, response.resp.id);
            window.cookie_manager.create(window.constants.user_username_cookie_name, response.resp.username);
        } else {
            response.success = false;
        }
    } else {
        response.success = false;
    }
    console.log("response:", response);
    console.log("register finished");
    return response;
};

async function login(email, password) {
    console.log("login called");
    console.log("email:", email);
    console.log("password:", password);
    // let response = await window.querier.post(`${ window.constants.user_login_endpoint}`, { email, password });
    let response = {
        "success": true,
        "message": "Login successful",
        "resp": {
            "id": 0,
            "username": email.split("@")[0]
        },
        "token": "token"
    };
    if (response.success) {
        if (response.token) {
            window.cookie_manager.create(window.constants.user_token_cookie_name, response.token);
        } else {
            response.success = false;
        }
        if (response.resp) {
            window.cookie_manager.create(window.constants.user_id_cookie_name, response.resp.id);
            window.cookie_manager.create(window.constants.user_username_cookie_name, response.resp.username);
        } else {
            response.success = false;
        }
    } else {
        response.success = false;
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
    // const widgets = await window.querier.get(window.constants.widget_name_list_endpoint);
    const widgets = window.constants.raw_widgets_list;
    console.log(`Available widgets ${JSON.stringify(widgets)}`);
    return widgets;
};

async function get_user_widgets() {
    // const user_widgets = await window.querier.get(window.constants.widget_get_user_widgets_endpoint);
    return window.constants.user_widget_list;
};

async function get_widget_content(widget_name) {
    console.log("manage_server.get_widget_content called");
    // const widgets = await window.querier.get(`${window.constants.widget_get_user_widgets_endpoint}/${widget_name}`);
    const widgets = window.constants.available_widgets;
    console.log("widgets:", JSON.stringify(widgets));
    console.log("Looking for widget");
    var resp = { "status": 404, "data": null };
    for (const widget of widgets) {
        if (widget.name === widget_name) {
            console.log("Widget found");
            resp = { "status": 200, "data": widget };
            break;
        }
    }
    if (resp.status === 200) {
        console.log(`Widget content ${JSON.stringify(resp)}`);
        return resp;
    }
    console.log("Widget not found");
    return resp;
};

async function update_user_widgets(widgets_body) {
    console.log("update_user_widgets called");
    console.log("widgets_body:", widgets_body);
    const widgets = await window.indexedDB_manager.read(window.constants.widget_cookie_name);
    console.log("widgets:", JSON.stringify(widgets));
    console.log("update_user_widgets finished");
};

async function remove_user_widget(widget_id) {
    console.log("remove_user_widgets called");
    console.log("widgets_body:", widgets_body);
    const widgets = await window.indexedDB_manager.read(window.constants.widget_cookie_name);
    console.log("widgets:", JSON.stringify(widgets));
    for (const widget of widgets) {
        if (widget.name === widget_id) {
            widgets.splice(widgets.indexOf(widget), 1);
            break;
        }
    }
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


const update_server = {
    login,
    register,
    log_user_out,
    get_user_widgets,
    remove_user_widget,
    get_widget_content,
    update_user_widgets,
    get_available_widgets,
    provide_missing_sso_info,
}

export { update_server };

window.update_server = update_server;

console.log("js/manage_server initialised");

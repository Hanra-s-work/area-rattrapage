/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** update_server.mjs
*/

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
    // let response = await window.querier.post("/login", { email, password });
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

async function get_available_widgets() {
    // const widgets = await window.querier.get("/widgets");
    const widgets = [
        "sample_widget",
        "Weather",
        "Clock",
        "Picture",
    ];
    return widgets;
};

async function get_user_widgets() {
    // const widgets = await window.querier.get("/user/widgets");
    const widgets = [
        {
            name: "sample_widget",
            content: "Hello world",
            position: 0
        },
        {
            name: "Clock",
            content: `<iframe src="https://timeday.co/clock?locale=en&timezone=Europe%2FBrussels&showDate=true&showTime=true&dateFormat=full&timeFormat=24h&showSeconds=true&showTimezone=false&fontSize=18&fontColor=%2523000000&fontWeight=normal&fontStyle=normal&fontDecoration=none&fontFamily=__className_9fd9c5&fontName=orbitron&borderShow=false&borderSize=1&borderStyle=solid&borderColor=%2523000000&borderRadius=rounded-md&backgroundColor=%2523ffffff&alignmentHorizontal=center&alignmentVertical=middle&paddingTop=4&paddingRight=4&paddingBottom=4&paddingLeft=4&width=400&height=40&styleType=standard" width="400" height="40" frameborder="0" style="border:none;"></iframe>`,
            position: 1
        },
        {
            name: "Picture",
            content: `<img src="https://picsum.photos/200"></img>`,
            position: 2
        }
    ];
    return widgets;
};

async function get_widget_content(widget_name) {
    // const widgets = await window.querier.get(`/user/widgets/${widget_name}`);
    const widgets = [
        {
            name: "sample_widget",
            content: "Hello world"
        },
        {
            name: "Clock",
            content: `<iframe src="https://timeday.co/clock?locale=en&timezone=Europe%2FBrussels&showDate=true&showTime=true&dateFormat=full&timeFormat=24h&showSeconds=true&showTimezone=false&fontSize=18&fontColor=%2523000000&fontWeight=normal&fontStyle=normal&fontDecoration=none&fontFamily=__className_9fd9c5&fontName=orbitron&borderShow=false&borderSize=1&borderStyle=solid&borderColor=%2523000000&borderRadius=rounded-md&backgroundColor=%2523ffffff&alignmentHorizontal=center&alignmentVertical=middle&paddingTop=4&paddingRight=4&paddingBottom=4&paddingLeft=4&width=400&height=40&styleType=standard" width="400" height="40" frameborder="0" style="border:none;"></iframe>`
        },
        {
            name: "Picture",
            content: `<img src="https://picsum.photos/200"></img>`
        }
    ];
    for (const widget of widgets) {
        if (widget.name === widget_name) {
            return { "status": 200, "data": widget };
        }
    }
    return { "status": 404, "data": null };
};

async function update_user_widgets(widgets_body) {
    console.log("update_user_widgets called");
    console.log("widgets_body:", widgets_body);
    const widgets = window.indexedDB_manager.read(window.constants.widget_cookie_name);
    console.log("widgets:", widgets);
    console.log("update_user_widgets finished");
};

async function remove_user_widget(widget_id) { };

async function log_user_out() {
    // await window.querier.get("/logout");
    return true;
};


const update_server = {
    login,
    register,
    get_available_widgets,
    get_user_widgets,
    get_widget_content,
    update_user_widgets,
    remove_user_widget,
    log_user_out
}

export { update_server };

window.update_server = update_server;

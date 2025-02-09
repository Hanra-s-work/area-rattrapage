/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** get_weather.js
*/

console.log("js/get_weather initialising");

async function getWeather(id, country, element) {
    console.log("getWeather");
    console.log("id:", id);
    console.log("country:", country);
    console.log("element:", element);
    const errMsg = "Failed to gather the weather data, please reload the window or wait for it to automatically refresh";
    const errMsgHTML = `<p>${errMsg}</p>`;
    const parentArticle = element.closest("article");
    const internalId = parentArticle.getAttribute("data-internal-id");
    const widgetName = parentArticle.getAttribute("data-name");
    console.log("internalId:", internalId);
    console.log("widgetName:", widgetName);
    const response = await window.update_server.update_user_widgets(internalId, widgetName, country)
    console.log("response:", response);
    console.log("response.ok:", response.ok);
    if (response.ok) {
        console.log("In response.ok");
        console.log("getWeather: response:", response);
        const body_container = element.closest("section");
        const widgets = await window.update_server.get_user_widgets();
        let index = 1;
        let cookie_widgets = [];
        if (widgets.status !== 200) {
            console.log(errMsg);
            body_container.innerHTML = errMsgHTML;
            return;
        }

        console.log("Widgets:", widgets);
        console.log(`JSON widgets: ${JSON.stringify(widgets)}`);

        const resp = widgets.resp;

        if (resp === null || resp === undefined || resp.length === 0 || resp == {} || Object.keys(resp).length === 0) {
            console.log(errMsg);
            body_container.innerHTML = errMsgHTML;
            return;
        }

        for (const widget of resp) {
            if (!widget) {
                index++;
                continue;
            }
            cookie_widgets.push(widget);
            if (!("widget_index" in cookie_widgets[cookie_widgets.length - 1])) {
                cookie_widgets[cookie_widgets.length - 1].widget_index = index;
            }
            console.log(`widget.db_index: ${widget.db_index}, internalId: ${internalId}`);
            if (Number(widget.db_index) === Number(internalId)) {
                console.log("Widget found");
                console.log(`index: ${index}, Widget:`, widget);
                const widget_field = await window.widget_manager.create_widget_field(widget, cookie_widgets[cookie_widgets.length - 1].widget_index);
                console.log("widget_field:", widget_field);
                parentArticle.outerHTML = widget_field;
            } else {
                console.log("Widget not found");
            }
            index++;
        }
        window.indexedDB_manager.remove(window.constants.widget_cookie_name);
        window.indexedDB_manager.create(window.constants.widget_cookie_name, JSON.stringify(cookie_widgets));
    } else {
        console.log(errMsg);
        element.innerHTML = errMsgHTML;
    }
    console.log("getWeather finished");
}

window.getWeather = getWeather;

console.log("js/get_weather finished");

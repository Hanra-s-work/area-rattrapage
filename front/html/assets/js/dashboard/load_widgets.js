/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** load_widgets.js
*/

async function inject_widgets(element) {
    console.log("Injecting widgets");
    const widgets = await window.update_server.get_user_widgets();
    let cookie_widgets = [];
    let index = 0;
    const errMsg = "No widgets to display. To add a widget please choose a widget from the dropdown then click the 'Add widget' button";
    const errMsgHTML = `<p>${errMsg}</p>`;

    if (widgets.status !== 200) {
        console.log(errMsg);
        element.innerHTML = errMsgHTML;
        return;
    }

    console.log("Widgets:", widgets);
    console.log(`JSON widgets: ${JSON.stringify(widgets)}`);

    const resp = widgets.resp;

    if (resp === null || resp === undefined || resp.length === 0 || resp == {} || Object.keys(resp).length === 0) {
        console.log(errMsg);
        element.innerHTML = errMsgHTML;
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
        console.log(`index: ${index}, Widget:`, widget);
        const widget_field = await window.widget_manager.create_widget_field(widget, cookie_widgets[cookie_widgets.length - 1].widget_index);
        element.innerHTML += widget_field;
        index++;
    }
    window.indexedDB_manager.remove(window.constants.widget_cookie_name);
    window.indexedDB_manager.create(window.constants.widget_cookie_name, JSON.stringify(cookie_widgets));
    console.log("Widgets injected");
}

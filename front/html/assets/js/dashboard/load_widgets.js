/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** load_widgets.js
*/

async function query_user_widgets() {
    console.log("Querying user widgets");
    const widgets = await window.update_server.get_user_widgets();
    console.log("User widgets queried");
    return widgets;
}

async function inject_widgets(element) {
    console.log("Injecting widgets");
    const widgets = await query_user_widgets();
    let cookie_widgets = [];
    let index = 0;

    for (const widget of widgets) {
        if (!widget) {
            index++;
            continue;
        }
        cookie_widgets.push(widget);
        if (!cookie_widgets[index].position) {
            cookie_widgets[index].position = index;
        }
        const widget_field = await window.widget_manager.create_widget_field(widget, cookie_widgets[index].position);
        element.innerHTML += widget_field;
        index++;
    }
    window.indexedDB_manager.remove(window.constants.widget_cookie_name);
    window.indexedDB_manager.create(window.constants.widget_cookie_name, JSON.stringify(cookie_widgets));
    console.log("Widgets injected");
}

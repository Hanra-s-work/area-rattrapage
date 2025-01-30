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

    for (const widget of widgets) {
        const widget_field = await window.widget_manager.create_widget_field(widget);
        element.innerHTML += widget_field;
    }
    console.log("Widgets injected");
}

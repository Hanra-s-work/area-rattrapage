function query_user_widgets() {
    console.log("Querying user widgets");
    const widgets = [
        {
            name: "sample_widget",
            content: "Hello world",
            position: 0
        },
        {
            name: "sample_widget_2",
            content: "Hello world 2",
            position: 1
        }
    ];
    console.log("User widgets queried");
    return widgets;
}

function inject_widgets(element) {
    console.log("Injecting widgets");
    const widgets = query_user_widgets();

    for (const widget of widgets) {
        const widget_field = window.widget_manager.create_widget_field(widget);
        element.innerHTML += widget_field;
    }
    console.log("Widgets injected");
}

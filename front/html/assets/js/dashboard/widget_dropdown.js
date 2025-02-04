/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** widget_dropdown.js
*/

function get_dropdown_value(element) {

}

async function get_raw_widget_options() {
    let raw_widget_options = `<option value="option_default" disabled selected>Please choose a widget...</option>`;
    const widgets = await window.update_server.get_available_widgets();
    for (const widget of widgets) {
        raw_widget_options += `<option value="${widget}">${widget}</option>`;
    }
    return raw_widget_options;
}

async function get_widgets_options(element) {
    console.log("get_widgets_options called");
    element.innerHTML = await get_raw_widget_options();
    console.log("get_widgets_options finished");
}

async function update_widget_content(element) {    // Find the closest widget container
    const widget = element.closest('.widget');

    // Access the input field for the position
    const positionInput = widget.querySelector(".widget_dropdown");
    const positionValue = positionInput ? positionInput.value : null;

    if (!positionValue || positionValue === 'option_default') {
        const msg = "Please select a widget from the dropdown";
        alert(msg);
        console.error(msg);
        return;
    }

    // Get the node of the widget body content
    const widgetBody = widget.querySelector(".widget_body");

    // Access the widget body content
    const widgetFooter = widget.querySelector(".widget_name_footer");
    const childSpan = widgetFooter.children[0];

    console.log("positionValue:", positionValue);

    const data = await window.widget_manager.get_widget_content(positionValue);

    if (data === null) {
        const msg = "No widget data found";
        alert(msg);
        console.error(msg);
        return;
    }

    console.log("Data:", data);

    widgetBody.innerHTML = data.content;

    // Update the name of the widget
    childSpan.innerText = data.name;

    // Log or use the values
    console.log('Widget Body:', widgetBody);
    console.log('Widget Footer:', widgetFooter);
}


const widget_dropdown = {
    get_dropdown_value,
    get_widgets_options,
    update_widget_content,
    get_raw_widget_options
}

window.widget_dropdown = widget_dropdown;

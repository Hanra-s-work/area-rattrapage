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

function update_widget_content(element) {    // Find the closest widget container
    const widget = button.closest('.widget');

    // Access the input field for the position
    const positionInput = widget.querySelector('.widget_header_index_position');
    const positionValue = positionInput ? positionInput.value : null;

    // Access the dropdown inside the widget
    const dropdown = widget.querySelector('.widget_dropdown');
    const dropdownValue = dropdown ? dropdown.value : null;

    // Access the widget body content
    const widgetBody = widget.querySelector('.widget_body');
    const widgetBodyContent = widgetBody ? widgetBody.innerHTML : null;

    // Log or use the values
    console.log('Widget Position:', positionValue);
    console.log('Dropdown Value:', dropdownValue);
    console.log('Widget Body Content:', widgetBodyContent);

    // Perform other actions as needed

}

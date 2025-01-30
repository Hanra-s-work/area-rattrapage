function get_dropdown_value(element) {

}

function get_raw_widget_options() {
    let raw_widget_options = `
    <option value="" disabled selected>Please choose a widget...</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>`;
    return raw_widget_options;
}

function get_widgets_options(element) {
    console.log("get_widgets_options called");
    element.innerHTML = get_raw_widget_options();
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

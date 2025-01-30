function my_onload() {
    const username = document.getElementById("username_field");
    const dropdown_header_widget = document.getElementById("header_dropdown");
    const widget_field = document.getElementById("widgets_body");

    update_username(username);
    get_widgets_options(dropdown_header_widget);
    inject_widgets(widget_field);
}

// Add a a rule to only run once the page is loaded
document.addEventListener("DOMContentLoaded", my_onload);

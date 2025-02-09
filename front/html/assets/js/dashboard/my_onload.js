/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** my_onload.js
*/

async function my_onload() {
    const username = document.getElementById("username_field");
    const dropdown_header_widget = document.getElementById("header_dropdown");
    const widget_field = document.getElementById("widgets_body");

    await update_username(username);
    await get_widgets_options(dropdown_header_widget);
    await inject_widgets(widget_field);
    await get_refresh_delay('refresh_delay');
    refresh_widgets(widget_field);
}

// Add a a rule to only run once the page is loaded
document.addEventListener("DOMContentLoaded", my_onload);

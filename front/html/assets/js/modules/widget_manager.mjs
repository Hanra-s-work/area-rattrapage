/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** widget_manager.mjs
*/

async function create_widget_field(widget_item) {
    if (!widget_item) {
        return "";
    };
    const widget_name = widget_item.name;
    let widget_code = ``;
    widget_code += `<article id="${widget_name}" class="widget">`;
    widget_code += `<section class="widget_header">`;
    widget_code += `<aside class="widget_header_index_position_box">`;
    widget_code += `<p>Position:</p>`;
    widget_code += `<input type="number" class="widget_header_index_position" min="0" value="${widget_item.position}" onchange="update_widget_location(${widget_name}, this);">`;
    widget_code += `</aside>`;
    widget_code += `<aside>`;
    widget_code += `<button class="button_desing" type="button" onclick="remove_widget(${widget_name});">`;
    widget_code += `<i class="far fa-trash-alt"></i>`;
    widget_code += `</button>`;
    widget_code += `</aside>`;
    widget_code += `</section>`;
    widget_code += `<section class="widget_content_type">`;
    widget_code += `<select class="widget_dropdown">`;
    widget_code += await get_raw_widget_options();
    widget_code += `</select>`;
    widget_code += `<button class="button_desing" type="button" onclick="update_widget_content(this);">Apply</button>`;
    widget_code += `</section>`;
    widget_code += `<section class="widget_body">`;
    widget_code += `<p>${widget_item.content}</p>`;
    widget_code += `</section>`;
    widget_code += `<section class="widget_footer">`;
    widget_code += `<p class="widget_name_footer">Name: `;
    widget_code += `<span id="widget_name">${widget_item.name}</span>`;
    widget_code += `</p>`;
    widget_code += `</section>`;
    widget_code += `</article>`;
    return widget_code;
}

async function get_widget_content(widget_name) {
    const response = await window.update_server.get_widget_content(widget_name);
    if (response.status === 200) {
        return response.data;
    }
    return null;
}

async function add_widget(widget_body_ID, dropdown_ID) {
    const dropdown = document.getElementById(dropdown_ID);
    const widget_body = document.getElementById(widget_body_ID);
    const widget_content = await get_widget_content(dropdown.value);
    const widget_field = await create_widget_field(widget_content);

    widget_body.innerHTML += widget_field;
    dropdown_element.value = "option_default";
}

function remove_widget(ID) {
    const name = ID;
    document.getElementById(ID).remove();
    window.widget_manager.remove_user_widget(name);
}

function update_widget(ID) { }

function update_widget_location(ID, element) {
    console.log("update_widget_location called");
    console.log("ID:", ID);
    console.log("update_widget_location finished");
}

const widget_manager = {
    add_widget,
    remove_widget,
    update_widget,
    create_widget_field,
    update_widget_location
}

export { widget_manager };

window.widget_manager = widget_manager;

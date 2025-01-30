function create_widget_field(widget_item) {
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
    widget_code += get_raw_widget_options();
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

function add_widget(ID, widgetType) {

}

function remove_widget(ID) {
    const name = ID;
    document.getElementById(ID).remove();
}

function update_widget(ID, widgetType) { }

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

/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** widget_manager.mjs
*/

console.log("js/widget_manager initialising");

async function widgets_to_json(widgets) {
    console.log("widgets_to_json called");
    let widgetData = [];

    widgets.forEach(widget => {
        const indexInput = widget.querySelector(".widget_header_index_position");
        const index = indexInput ? parseInt(indexInput.value, 10) : null;

        const nameSpan = widget.querySelector(".widget_footer #widget_name");
        const name = nameSpan ? nameSpan.textContent.trim() : "";

        const contentSection = widget.querySelector(".widget_body");
        const content = contentSection ? contentSection.innerHTML.trim() : "";

        widgetData.push({ index, name, content });
    });

    console.log("widgets_to_json finished");
    return widgetData;
}

async function get_widget_index(widget_body_ID) {
    console.log("get_widget_index called");
    const widget_body = document.getElementById(widget_body_ID);
    const widgets_present = widget_body.children.length;
    console.log("widgets_present:", widgets_present);
    console.log("get_widget_index finished");
    return widgets_present;
}

async function create_widget_field(widget_item, widget_index) {
    console.log("create_widget_field called");
    if (widget_item == null) {
        console.log("widget_item is null");
        console.log("create_widget_field finished");
        return "";
    };
    const widget_name = widget_item.name.trimStart();
    const widget_id = `${widget_name}_${widget_index}`;
    const widget_content = widget_item.html;
    const internal_widget_id = widget_item.db_index;
    console.log(`widget_item: '${JSON.stringify(widget_item)}'`);
    console.log(`widget_index: '${widget_index}'`);
    console.log(`widget_id: '${widget_id}'`);
    console.log(`widget_name: '${widget_name}'`);
    console.log(`internal_widget_id: '${internal_widget_id}'`);
    console.log(`widget_content: '${JSON.stringify(widget_content)}'`);
    let widget_code = ``;
    widget_code += `<article id="${widget_id}" class="widget" data-internal-id="${internal_widget_id}" data-name="${widget_name}">`;
    widget_code += `<section class="widget_header">`;
    widget_code += `<aside class="widget_header_index_position_box">`;
    widget_code += `<p>Position:</p>`;
    // widget_code += `<input type="number" class="widget_header_index_position" min="0" value="${widget_index}" onchange="update_widget_location(this);">`;
    widget_code += `<p>${widget_index}</p>`;
    widget_code += `</aside>`;
    widget_code += `<aside>`;
    widget_code += `<button class="button_desing" type="button" onclick="window.widget_manager.remove_widget('${widget_id}', '${widget_name}', '${internal_widget_id}');">`;
    widget_code += `<i class="far fa-trash-alt"></i>`;
    widget_code += `</button>`;
    widget_code += `</aside>`;
    widget_code += `</section>`;
    widget_code += `<section class="widget_content_type">`;
    widget_code += `<select class="widget_dropdown">`;
    widget_code += await get_raw_widget_options();
    widget_code += `</select>`;
    widget_code += `<button class="button_desing" type="button" onclick="update_widget_content(this, ${internal_widget_id});">Apply</button>`;
    widget_code += `</section>`;
    widget_code += `<section class="widget_body">`;
    widget_code += `<div>${widget_content}</div>`;
    widget_code += `</section>`;
    widget_code += `<section class="widget_footer">`;
    widget_code += `<p class="widget_name_footer">Name: `;
    widget_code += `<span>${widget_name}</span>`;
    widget_code += `</p>`;
    widget_code += `</section>`;
    widget_code += `</article>`;
    console.log("widget_code:", widget_code);
    console.log("create_widget_field finished");
    return widget_code;
}

async function get_widget_content(widget_name) {
    console.log("get_widget_content called");
    const response = await window.update_server.get_widget_content(widget_name);
    if (response.status === 200) {
        console.log("get_widget_content finished");
        return response.data;
    }
    console.log("get_widget_content finished");
    return response;
}

async function add_widget(widget_body_ID, dropdown_ID) {
    console.log("add_widget called");
    const dropdown = document.getElementById(dropdown_ID);
    if (dropdown.value === "option_default") {
        alert("Please select an option from the dropdown");
        console.log("add_widget finished");
        return;
    }
    const widget_body = document.getElementById(widget_body_ID);
    const widget_content = await window.widget_manager.get_widget_content(dropdown.value);
    console.log(`add_widget: Received content: ${JSON.stringify(widget_content)}`);
    if ("status" in widget_content && widget_content.status !== 200) {
        let msg = "";
        if (widget_content.data !== null) {
            msg = `Failed to fetch the widget: ${widget_content.data}`;
        } else {
            msg = "Failed to fetch the widget";
        }
        alert(msg);
        console.log(msg);
        return;
    }
    const widget_index = widget_content.db_index || await window.widget_manager.get_widget_index(widget_body_ID);
    console.log("widget_content:", widget_content);
    await window.update_server.add_widget_to_user(widget_content.widget_id, null);
    const widget_field = await window.widget_manager.create_widget_field(widget_content, widget_index);

    console.log("widget_body:", widget_body);
    console.log("widget_field:", widget_field);


    if (widget_body && widget_field) {
        if (widget_body.innerHTML === "<p>No widgets to display. To add a widget please choose a widget from the dropdown then click the 'Add widget' button</p>") {
            widget_body.innerHTML = "";
        }
        widget_body.innerHTML += widget_field;
    }
    dropdown.value = "option_default";
    console.log("add_widget finished");
}

async function remove_widget(ID, name, widget_id) {
    console.log("remove_widget called");
    document.getElementById(ID).remove();
    await window.update_server.remove_user_widget(name, widget_id);
    const widgets = document.getElementById("widgets_body");
    widgets.innerHTML = "";
    await inject_widgets(widgets);
    console.log("remove_widget finished");
}

async function update_widget(ID) { }

async function update_widget_location(ID, element) {
    console.log("update_widget_location called");
    console.log("ID:", ID);
    console.log("update_widget_location finished");
}

const widget_manager = {
    add_widget,
    remove_widget,
    update_widget,
    widgets_to_json,
    get_widget_index,
    get_widget_content,
    create_widget_field,
    update_widget_location
}

export { widget_manager };

window.widget_manager = widget_manager;

console.log("js/widget_manager initialised");

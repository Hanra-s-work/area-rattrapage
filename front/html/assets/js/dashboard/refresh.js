/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** refresh.js
*/

async function update_refresh(elem) {
    console.log("update called");
    let refresh_value = elem.value;
    console.log(`refresh_value: ${refresh_value}`);
    window.update_server.update_refresh(refresh_value);
    window.cookie_manager.remove(window.constants.user_refresh_wigets_cookie_name);
    window.cookie_manager.create(window.constants.user_refresh_wigets_cookie_name, refresh_value);
    console.log("update finished");
}

async function get_refresh_delay(ID) {
    console.log("get_refresh called");
    const elem = document.getElementById(ID);
    const refresh_value = await window.update_server.get_refresh();
    console.log("refresh_value:", refresh_value);
    if (refresh_value === null || refresh_value === undefined) {
        console.log("Failed to get refresh value");
        return;
    }
    const refresh_value_int = Number(refresh_value.refresh);
    console.log("refresh_value_int:", refresh_value_int);
    console.log("elem:", elem);
    elem.value = refresh_value_int;
    console.log("elem.value:", elem.value);
    console.log("cookie_name:", window.constants.user_refresh_wigets_cookie_name);
    window.cookie_manager.remove(window.constants.user_refresh_wigets_cookie_name);
    window.cookie_manager.create(window.constants.user_refresh_wigets_cookie_name, refresh_value_int);
    console.log("get_refresh finished");
}

async function refresh_widgets(WidgetElement) {
    console.log("refresh_widgets called");
    let loop = true;
    while (loop) {
        await get_refresh_delay("refresh_delay");
        console.log("Refreshing widgets");
        WidgetElement.innerHTML = "";
        await inject_widgets(WidgetElement);
        const refresh_value = window.cookie_manager.read(window.constants.user_refresh_wigets_cookie_name);
        console.log("refreshed, sleeping for", refresh_value);
        if (refresh_value === "undefined" || refresh_value === undefined || refresh_value === null) {
            console.log("refresh_value is undefined, breaking");
            loop = false;
            break;
        }
        const second = 1000;
        const final_refresh_value = Number(refresh_value) * second;
        console.log("sleeping for ", refresh_value, "seconds");
        await sleep(final_refresh_value);
        console.log("slept for ", refresh_value, "continuing");
    }
    console.log("refresh_widgets finished, because of an error");
}

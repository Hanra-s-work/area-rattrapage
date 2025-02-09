/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** get_weather.js
*/

console.log("js/get_weather initialising");

async function getWeather(id, country, element) {
    console.log("getWeather");
    console.log("id:", id);
    console.log("country:", country);
    console.log("element:", element);
    const parentArticle = element.closest("article");
    const internalId = parentArticle.getAttribute("data-internal-id");
    const widgetName = parentArticle.getAttribute("data-name");
    console.log("internalId:", internalId);
    console.log("widgetName:", widgetName);
    const response = await window.update_server.update_user_widgets(internalId, widgetName, country)
    console.log("response:", response);
}

window.getWeather = getWeather;

console.log("js/get_weather finished");

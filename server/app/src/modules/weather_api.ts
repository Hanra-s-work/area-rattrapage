/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** weather_api.ts
*/

import DB from "./db";

// Import the list of cities for the weather api
// import CityList from "../ressources/city.list.min.json"
import CityList from "../ressources/city.list.tiny.json"


export namespace WeatherApi {


    export function get_location_coordinates() {
        console.log("get_location_coordinates");

        console.log(`CityList: ${JSON.stringify(CityList)}: CityList`);

        let coordinate_equivalence: Record<string, { lat: number; lon: number }> = Object();
        for (let i = 0; i < CityList.length; i++) {
            let city = CityList[i];
            let keyName = "";
            if (city.name) {
                keyName += `${city.name}, `;
            }
            if (city.state) {
                keyName += `${city.state}, `;
            }
            keyName += city.country;
            coordinate_equivalence[String(keyName)] = { "lat": city.coord.lat, "lon": city.coord.lon };
        }
        console.log(`Coordinate Equivalence: ${JSON.stringify(coordinate_equivalence)} : coodinate equivalence`);
        return coordinate_equivalence;
    }

    export const coordinate_equivalence = get_location_coordinates();
    export const available_cities = Object.keys(coordinate_equivalence);

    export interface Coordinates {
        latitude: string;
        longitude: string;
    }

    export async function getCountryCoordinatesOld(country: string, email: string): Promise<Coordinates | null> {
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(country)}&format=json&limit=1`;

        try {
            const response = await fetch(url, {
                headers: { 'User-Agent': `YourAppName/1.0 (${email})` },
            });

            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            const data = await response.json();
            if (data.length === 0) {
                throw new Error(`No results found for: ${country}`);
            }

            return { latitude: data[0].lat, longitude: data[0].lon };
        } catch (error: any) {
            console.error("Error fetching coordinates:", error.message);
            return null;
        }
    }

    export async function getCountryCoordinates(country: string, email: string): Promise<Coordinates | null> {
        const coords = coordinate_equivalence[country];
        if (coords) {
            return { latitude: String(coords.lat), longitude: String(coords.lon) };
        } else {
            console.error("Error fetching coordinates: No results found for: ", country);
            return null;
        }
    }

    export async function getWeather(container: HTMLElement, country: string, weatherKey: string, email: string): Promise<String> {
        const coords = await getCountryCoordinates(country, email);
        let html = "";
        if (coords) {
            const { latitude, longitude } = coords;
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&mode=html&appid=${weatherKey}&units=metric&lang=en`;

            // Create and inject the iframe dynamically
            const width = 400;
            const height = 400;

            html = `<iframe src="${weatherUrl}" width="${width}" height="${height}" frameborder="0" scrolling="no"></iframe>`;
        } else {
            const msg = "Could not retrieve weather data.";
            console.log(msg);
            html = `<p>${msg}</p>`;
        }
        return html;
    }

    export function injectWidget(widgetId: string, weatherKey: string, email: string): void {
        const widget = document.getElementById(widgetId);
        if (widget) {
            const country = widget.dataset.country || "France";
            getWeather(widget, country, weatherKey, email);
        }
    }

    export async function get_weather_widget(index: number, user_info: any, database: DB) {
        var content = "";
        const widget_id = `country_weather_${index}`;
        const email = user_info.email || 'your@email.com';
        const apiKey = await database.getContentFromTable("widgets", ["api_key"], "widget_name='weather'");
        if (!apiKey || apiKey.length == 0) {
            return "<p>Widget gathering error, the content for the given widget could not be fetched successfully.</p>";
        }
        const weatherKey = apiKey[0].api_key || null;
        content += `<div class=\"weather-container\" data-country=\"France\" id=\"${widget_id}\"></div>`;
        content += `<script id="script_${widget_id}" type='text/javascript'>`;
        content += "async function getCountryCoordinates(country) {";
        content += "    const url = \`https://nominatim.openstreetmap.org/search?q=\${encodeURIComponent(country)}&format=json&limit=1\`;"
        content += "    try {";
        content += "        const response = await fetch(url, {";
        content += `            headers: { 'User-Agent': 'YourAppName/1.0 (${email})' },`;
        content += "        });";
        content += "        if (!response.ok) { throw new Error(\`HTTP Error! Status: \${response.status}\`);}";
        content += "        const data = await response.json();";
        content += "        if (data.length === 0) { throw new Error(\`No results found for: \${country}\`); }";
        content += "        return { latitude: data[0].lat, longitude: data[0].lon };";
        content += "    } catch (error) {";
        content += `        console.error("Error fetching coordinates:", error.message);`;
        content += "        return null;";
        content += "    }";
        content += "}";
        content += "";
        content += "async function getWeather(container, country) {";
        content += "    const coords = await getCountryCoordinates(country);";
        content += "    if (coords) {";
        content += "        const lat = coords.latitude;";
        content += "        const lon = coords.longitude;";
        content += `        const apiKey = "${weatherKey}";`;
        content += "        const weatherUrl = \`https://api.openweathermap.org/data/2.5/weather?lat=\${lat}&lon=\${lon}&mode=html&appid=\${apiKey}&units=metric&lang=en\`;";
        content += "";
        content += "        // Create and inject the iframe dynamically";
        content += `        const iframe = document.createElement("iframe");`;
        content += `        iframe.src = weatherUrl;`;
        content += `        iframe.width = "400";`;
        content += `        iframe.height = "400";`;
        content += `        iframe.frameBorder = "0";`;
        content += `        iframe.scrolling = "no";`;
        content += "";
        content += "        // Remove any previous iframes inside the container";
        content += `        container.innerHTML = "";`;
        content += "        container.appendChild(iframe);";
        content += "    } else {";
        content += `        console.log("Could not retrieve weather data.");`;
        content += "    }";
        content += "}";
        content += "";
        content += "    // Automatically trigger the weather fetching for each dynamically injected div";
        content += "    function inject_widget() {";
        content += `        const widget = document.getElementById(\"${widget_id}\");`;
        content += "        if (widget) {";
        content += `            getWeather(widget, widget.dataset.country || "France");`;
        content += "        }";
        content += "    }";
        content += "";
        content += "    inject_widget();";
        content += "</script>";
        content += "";
        return content;
    };
};

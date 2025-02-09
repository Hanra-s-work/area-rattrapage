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
        coords: {
            latitude: string;
            longitude: string;
        },
        city: string
    }

    export async function getCountryCoordinates(country: string, database: DB, user_info: any, widget_index: Number): Promise<Coordinates | null> {
        console.log("getCountryCoordinates");
        let city = available_cities[Math.floor(Math.random() * available_cities.length - 1)];
        let coords;
        if (coordinate_equivalence.hasOwnProperty(country)) {
            coords = coordinate_equivalence[country];
            city = country
        } else {
            database.updateTable("user_widgets", ["widget_option"], [city], `widget_index='${widget_index}' AND user_id='${user_info.id}'`, []);
            coords = coordinate_equivalence[city];
        }
        if (coords) {
            return { coords: { latitude: String(coords.lat), longitude: String(coords.lon) }, city: city };
        } else {
            console.error("Error fetching coordinates: No results found for: ", country);
            return null;
        }
    }

    export async function getWeather(id: string, country: string, weatherKey: string, database: DB, user_info: any, widget_index: Number): Promise<{ html: String, location: String }> {
        console.log("getWeather");
        const coords = await getCountryCoordinates(country, database, user_info, widget_index);
        let html = "";
        let location = "";
        if (coords) {
            const { latitude, longitude } = coords.coords;
            location = coords.city;
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&mode=html&appid=${weatherKey}&units=metric&lang=en`;

            // Create and inject the iframe dynamically
            const width = 200;
            const height = 150;

            html = `<iframe src="${weatherUrl}" width="${width}" height="${height}" frameborder="0" scrolling="no" id="${id}" data-country="${country}"></iframe>`;
        } else {
            const msg = "Could not retrieve weather data.";
            console.log(msg);
            html = `<p id="${id}">${msg}</p>`;
        }
        return { html: html, location: location };
    }

    export async function get_weather_locations(dropdown_id: string, command: string, location: String) {
        console.log("get_weather_locations");
        let html = `<select id="${dropdown_id}" name="${dropdown_id}" onchange="${command}">`;
        for (let i = 0; i < available_cities.length; i++) {
            if (available_cities[i] === location) {
                html += `<option value="${available_cities[i]}" selected>${available_cities[i]}</option>`;
            } else {
                html += `<option value="${available_cities[i]}">${available_cities[i]}</option>`;
            }
        }
        html += "</select>";
        return html;
    }

    export async function get_weather_widget(widget_name: string, index: number, user_info: any, database: DB) {
        console.log("get_weather_widget");
        var content = "";
        const widget_id = `${widget_name}_${index}`;
        const country = await database.getContentFromTable("user_widgets", ["widget_option"], `widget_index='${index}' AND user_id='${user_info.id}'`);
        const apiKey = await database.getContentFromTable("widgets", ["api_key"], "widget_name='weather'");
        if (!apiKey || apiKey.length == 0) {
            return "<p>Widget gathering error, the content for the given widget could not be fetched successfully.</p>";
        }
        const weatherKey = apiKey[0].api_key || null;
        console.log("widget_id", widget_id);
        console.log("Country", country);
        console.log("Weather key", weatherKey);
        let countryCleaned = country[0].widget_option;
        if (countryCleaned === undefined || countryCleaned.length === 0 || !countryCleaned || countryCleaned === null) {
            countryCleaned = "";
        }
        console.log("Country cleaned", countryCleaned);
        const weatherBody = await getWeather(`${widget_id}-iframe`, countryCleaned, weatherKey, database, user_info, index);
        const weatherDropdown = await get_weather_locations(`${widget_id}-dropdown`, `getWeather('${widget_id}-iframe', this.value, this)`, weatherBody.location);
        console.log("Weather body", weatherBody);
        console.log("Weather dropdown", weatherDropdown);
        content += `<div id="${widget_id}" data-country="${weatherBody.location}" data-id="${index}">`;
        content += weatherDropdown;
        content += weatherBody.html;
        content += "</div>";
        console.log("Widget content:", content);
        return content;
    };
};

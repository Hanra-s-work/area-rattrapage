/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** widgets.ts
*/

import DB from "./db";
import { GithubWidget } from "./github_widget";
import { WeatherApi } from "./weather_api";

export namespace Widgets {

    export const sample_user_widget = [
        {
            index: 0,
            name: "sample_widget",
            option: 0
        },
        {
            index: 1,
            name: "Clock",
            option: 0
        },
        {
            index: 2,
            name: "Picture",
            option: 0
        },
        {
            index: 3,
            name: "Weather",
            option: 0
        },
        {
            index: 4,
            name: "Weather",
            option: 5
        },
        {
            index: 5,
            name: "Github",
            option: 0
        }
    ];

    export const available_widgets = [
        {
            name: "sample_widget",
            content: get_sample_widget
        },
        {
            name: "Clock",
            content: get_clock_widget
        },
        {
            name: "Picture",
            content: get_random_picture
        },
        {
            name: "Weather",
            content: get_weather_widget
        },
        {
            name: "Github",
            content: get_github_widget
        }
    ];

    const raw_widgets_list = extractValuesByKey(available_widgets, "name");

    export function extractValuesByKey<T extends Record<string, unknown>, K extends keyof T>(
        list: T[],
        key: K
    ): T[K][] {
        return list
            .filter(obj => key in obj)
            .map(obj => obj[key]);
    }

    export async function get_weather_widget(index: number, user_info: any, database: DB) {
        try {
            return WeatherApi.get_weather_widget(index, user_info, database);
        } catch (error) {
            return "<p>Widget gathering error, the content for the given widget could not be fetched successfully.</p>";
        }
    };

    export async function get_random_picture(widget_name: string, index: number, user_info: any, database: DB) {
        var content = "";
        const widget_id = `${widget_name}_${index}`;
        const randomWidth = Math.floor(Math.random() * 1000) + 200;
        const randomHeight = Math.floor(Math.random() * 1000) + 200;
        content += `<img src="https://picsum.photos/${randomWidth}/${randomHeight}?random=${index}"></img>`;
        return content;
    }

    export async function get_github_widget(widget_name: string, index: number, user_info: any, database: DB) {
        try {
            const sso_id = await database.getContentFromTable("sso_oauth", ["id"], "provider_name='github'");
            if (!user_info.id || sso_id.length === 0 || !sso_id[0].id) {
                return "<p>Widget gathering error, the content for the given widget could not be fetched successfully.</p>";
            }
            const oauth_token = await database.getContentFromTable("widgets", ["api_key"], `service_id='${String(sso_id[0].id)}' AND user_id='${String(user_info.id)}'`);
            if (!oauth_token || oauth_token.length === 0) {
                return "<p>Widget gathering error, the content for the given widget could not be fetched successfully.</p>";
            }
            return await GithubWidget.injector(widget_name, index, String(oauth_token[oauth_token.length - 1].token));
        } catch (error) {
            console.error("Error fetching Github widget:", error);
            return "<p>Widget gathering error, the content for the given widget could not be fetched successfully.</p>";
        }
    }

    export async function get_sample_widget(widget_name: string, index: number, user_info: any, database: DB) {
        const widget_id = `${widget_name}_${index}`;
        return `<div id="${widget_id}"><p>Hello world</p></div>`;
    }

    export async function get_clock_widget(widget_name: string, index: number, user_info: any, database: DB) {
        const widget_id = `${widget_name}_${index}`;
        return `<div id="${widget_id}"><iframe src="https://timeday.co/clock?locale=en&timezone=Europe%2FBrussels&showDate=true&showTime=true&dateFormat=full&timeFormat=24h&showSeconds=true&showTimezone=false&fontSize=18&fontColor=%2523000000&fontWeight=normal&fontStyle=normal&fontDecoration=none&fontFamily=__className_9fd9c5&fontName=orbitron&borderShow=false&borderSize=1&borderStyle=solid&borderColor=%2523000000&borderRadius=rounded-md&backgroundColor=%2523ffffff&alignmentHorizontal=center&alignmentVertical=middle&paddingTop=4&paddingRight=4&paddingBottom=4&paddingLeft=4&width=400&height=40&styleType=standard" width="400" height="40" frameborder="0" style="border:none;"></iframe></div>`;
    }

    export async function get_raw_widgets() {
        return raw_widgets_list;
    }
    export async function get_available_widget_names() {
        return raw_widgets_list;
    }

};

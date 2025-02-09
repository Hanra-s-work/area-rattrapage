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

    export const no_widgets = [
        {
            index: -1,
            db_index: -1,
            name: "no_widget",
            option: 0,
            html: "<p>No widgets available</p>"
        }
    ];

    export const sample_user_widget = [
        {
            index: 0,
            db_index: 0,
            name: "sample_widget",
            option: 0,
            html: ""
        },
        {
            index: 1,
            db_index: 1,
            name: "Clock",
            option: 0,
            html: ""
        },
        {
            index: 2,
            db_index: 2,
            name: "Picture",
            option: 0,
            html: ""
        },
        {
            index: 3,
            db_index: 3,
            name: "Weather",
            option: 0,
            html: ""
        },
        {
            index: 4,
            db_index: 4,
            name: "Weather",
            option: 5,
            html: ""
        },
        {
            index: 5,
            db_index: 5,
            name: "Github",
            option: 0,
            html: ""
        }
    ];

    export const available_widgets: Record<string, Function> = {
        "sample_widget": get_sample_widget,
        "clock": get_clock_widget,
        "picture": get_random_picture,
        "weather": get_weather_widget,
        "github": get_github_widget
    };

    const raw_widgets_list = Object.keys(available_widgets);

    export function extractValuesByKey<T, K extends keyof T>(list: T[], key: K): T[K][] {
        console.log("extractValuesByKey");
        return list.map(obj => obj[key]);
    }

    export async function get_weather_widget(widget_name: string, index: number, user_info: any, database: DB): Promise<string> {
        console.log("get_weather_widget");
        try {
            return await WeatherApi.get_weather_widget(widget_name, index, user_info, database);
        } catch (error) {
            return "<p>Widget gathering error, the content for the given widget could not be fetched successfully.</p>";
        }
    }

    export async function get_random_picture(widget_name: string, index: number, user_info: any, database: DB): Promise<string> {
        console.log("get_random_picture");
        const widget_id = `${widget_name}_${index}`;
        const randomWidth = Math.floor(Math.random() * 1000) + 200;
        const randomHeight = Math.floor(Math.random() * 1000) + 200;
        return `<img src="https://picsum.photos/${randomWidth}/${randomHeight}?random=${index}" id="${widget_id}"></img>`;
    }

    export async function get_github_widget(widget_name: string, index: number, user_info: any, database: DB): Promise<string> {
        console.log("get_github_widget");
        try {
            const sso_id = await database.getContentFromTable("sso_oauth", ["id"], "provider_name='github'");
            if (!user_info.id || sso_id.length === 0 || !sso_id[0].id) {
                return "<p>Widget gathering error...</p>";
            }
            const oauth_token = await database.getContentFromTable("widgets", ["api_key"], `service_id='${sso_id[0].id}' AND user_id='${user_info.id}'`);
            if (!oauth_token || oauth_token.length === 0) {
                return "<p>Please connect to GitHub.<br>Please connect to your github account by presing this button<button onclick='sso()'>here</button></p>";
            }
            return await GithubWidget.injector(widget_name, index, String(oauth_token[oauth_token.length - 1].api_key));
        } catch (error) {
            console.error("Error fetching Github widget:", error);
            return "<p>Widget gathering error...</p>";
        }
    }

    export async function get_sample_widget(widget_name: string, index: number, user_info: any, database: DB): Promise<string> {
        console.log("get_sample_widget");
        return `<div id="${widget_name}_${index}"><p>Hello world</p></div>`;
    }

    export async function get_clock_widget(widget_name: string, index: number, user_info: any, database: DB): Promise<string> {
        console.log("get_clock_widget");
        return `<div id="${widget_name}_${index}"><iframe src="https://timeday.co/clock?locale=en&timezone=Europe%2FBrussels&showDate=true&showTime=true&dateFormat=full&timeFormat=24h&showSeconds=true&showTimezone=false&fontSize=18&fontColor=%2523000000&fontWeight=normal&fontStyle=normal&fontDecoration=none&fontFamily=__className_9fd9c5&fontName=orbitron&borderShow=false&borderSize=1&borderStyle=solid&borderColor=%2523000000&borderRadius=rounded-md&backgroundColor=%2523ffffff&alignmentHorizontal=center&alignmentVertical=middle&paddingTop=4&paddingRight=4&paddingBottom=4&paddingLeft=4&width=400&height=40&styleType=standard" width="400" height="40" frameborder="0" style="border:none;"></iframe></div>`;
    }

    export async function get_available_widget_names() {
        console.log("get_available_widget_names");
        return raw_widgets_list;
    }

    export async function get_user_widgets(user_info: any, database: DB): Promise<typeof no_widgets | any> {
        console.log("get_user_widgets");
        // Fetch all widget definitions
        const widgetNames = await database.getContentFromTable("widgets", ["id", "widget_name"]);
        console.log("widgetNames", widgetNames);

        // Fetch user-specific widgets
        console.log(`User id: ${user_info.id}`);
        console.log("Getting user widgets");
        const widget = await database.getContentFromTable("user_widgets", ["id", "widget_id", "widget_index", "widget_option"], `user_id='${user_info.id}'`);
        console.log("widget", widget);

        if (!widget || widget.length === 0) {
            console.log("No widgets found for user");
            return no_widgets;
        }

        // Convert widgetNames to a lookup map (id -> name)
        const widgetNameMap = Object.fromEntries(widgetNames.map((w: any) => [w.id, w.widget_name]));

        console.log("widgetNames", widgetNameMap);
        console.log("widget", widget);

        let final_build = [];

        console.log("Iterating over widgets");

        for (let i = 0; i < widget.length; i++) {
            const widget_id = Number(widget[i].widget_id);
            const widget_name = widgetNameMap[widget_id].toLowerCase() || "<Unknown Widget>";

            console.log(`widget_id: ${widget_id}, widget_name: ${widget_name}`);

            let widgetContent = "<p>Widget gathering error, the content for the given widget could not be fetched successfully.</p>";
            console.log(`Widget content (default error): ${widgetContent}`);
            console.log(`widget_name: ${widget_name}, available_widgets: `, available_widgets);

            if (widget_name in available_widgets) {
                console.log("Widget name found in available_widgets");
                try {
                    console.log("Trying to fetch widget content");
                    widgetContent = await available_widgets[widget_name](widget_name, widget[i].widget_index, user_info, database)
                        || "<p>Widget gathering error, the content for the given widget could not be fetched successfully.</p>";
                    console.log(`Widget content: ${widgetContent}`);
                } catch (error) {
                    console.error(`Error executing widget ${widget_name}:`, error);
                }
            }

            let widgetNode = {
                index: Number(widget[i].widget_index),
                db_index: Number(widget[i].id),
                name: widget_name,
                option: widget[i].widget_option,
                html: widgetContent
            };
            console.log("widgetNode", widgetNode);
            final_build.push(widgetNode);
            console.log("final_build", final_build);
        }
        console.log("iteration finished");
        console.log("final_build", final_build);

        return final_build;
    }

    export async function add_user_widget(user_info: any, widget_id: string, widget_location: string | null, database: DB): Promise<boolean> {
        console.log("add_user_widget");
        console.log("user_info", user_info);
        console.log("widget_id", widget_id);
        console.log("widget_location", widget_location);
        const user_id = Number(user_info.id);
        const widget_id_int = Number(widget_id);
        console.log("user_id", user_id);
        console.log("widget_id_int", widget_id_int);
        if (isNaN(user_id) || isNaN(widget_id_int)) {
            console.log("Invalid user_id or widget_id");
            return false;
        }
        const widget_location_int = widget_location ? Number(widget_location) : 0;
        const user_widget_table = "user_widgets";
        const lastEnteredWidget = await database.getContentFromTable(user_widget_table, ["widget_index"], `user_id='${user_id}'`);
        console.log("lastEnteredWidget", lastEnteredWidget);
        const widgetIndex = lastEnteredWidget.length > 0 ? Number(lastEnteredWidget[lastEnteredWidget.length - 1].widget_index) + 1 : 0;
        console.log("widgetIndex", widgetIndex);
        await database.writeToTable(user_widget_table, ["user_id", "widget_id", "widget_index", "widget_option"], [user_id, widget_id_int, widgetIndex, widget_location_int]);
        return true;
    }

    export async function update_user_widget(user_info: any, user_widget_id: string, widget_type: string, widget_location: string | null, database: DB): Promise<boolean> {
        console.log("update_user_widget");
        console.log("user_info", user_info);
        console.log("User widget id", user_widget_id);
        console.log("widget_location", widget_location);
        const user_widget_id_int = Number(user_widget_id);
        const user_id = Number(user_info.id);
        console.log("user_id", user_id);
        console.log("widget_id_int", user_widget_id_int);
        if (isNaN(user_id) || isNaN(user_widget_id_int)) {
            console.log("Invalid user_id or widget_id");
            return false;
        }
        const widget_location_int = widget_location ? Number(widget_location) : null;
        const user_widget_table = "user_widgets";
        const widget_informations = await database.getContentFromTable(user_widget_table, ["*"], `id = '${user_widget_id}'`);
        if (!widget_informations || widget_informations.length === 0) {
            console.log("The user widget don't exist");
            return false;
        }
        if (user_info.id !== widget_informations[0]["user_id"] || Number(widget_type) !== widget_informations[0]["widget_id"]) {
            console.log("The user id or widget id is not good.");
            return false;
        }
        await database.updateTable(user_widget_table, ["widget_option"], [widget_location_int], "id = ?", [user_widget_id]);
        return true;
    }

    export async function get_widget_info(user_info: any, widget_name: string, database: DB): Promise<boolean | { index: Number, db_index: Number, name: string, option: Number, html: string }> {
        console.log("get_widget_info");
        console.log("user_info", user_info);
        console.log("widget_name", widget_name);
        const widgetNames = await database.getContentFromTable("widgets", ["widget_name", "id"]);
        const widgetError = "<p>Widget gathering error, the content for the given widget could not be fetched successfully.</p>";

        const finalName = widget_name.toLowerCase();
        console.log(`finalName: ${finalName}`);

        // Convert widgetNames to a lookup map (name -> id)
        const widgetNameMap = Object.fromEntries(widgetNames.map((w: any) => [w.widget_name.toLowerCase(), Number(w.id)]));
        console.log("widgetMap: ", widgetNameMap);
        console.log("available_widgets: ", available_widgets);
        if (!(finalName in widgetNameMap)) {
            console.log(`Widget ${finalName} not found in widgetNameMap`);
            return false;
        }
        if (!(finalName in available_widgets)) {
            console.log(`Widget ${finalName} not found in available_widgets`);
            return false;
        }
        let widgetContent = widgetError;
        try {
            widgetContent = await available_widgets[finalName](finalName, widgetNameMap[finalName], user_info, database) || widgetError;
        } catch (error) {
            console.error(`Error executing widget ${finalName}:`, error);
        }

        return {
            index: 0,
            db_index: Number(widgetNameMap[finalName]),
            name: widget_name,
            option: 0,
            html: widgetContent
        };
    }

    export async function delete_user_widget(user_info: any, widget_id: string, database: DB): Promise<boolean> {
        console.log("delete_user_widget");
        console.log("user_info", user_info);
        console.log("widget_id", widget_id);
        const user_widget_table = "user_widgets";
        console.log("user_info = ", user_info);
        const user_id = Number(user_info.id);
        console.log(`Deleting widget ${widget_id} for user ${user_id}`);
        const current_widget = await database.getContentFromTable(user_widget_table, ["*"], `user_id='${user_id}' AND id='${widget_id}'`);
        console.log("current_widget", current_widget);
        if (current_widget.length === 0) {
            return false;
        }
        await database.dropFromTable(user_widget_table, `id='${widget_id}'`, []);
        return true;
    }
}

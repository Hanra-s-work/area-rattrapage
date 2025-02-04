/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** oauth.ts
*/

import uuid4 from "uuid4";
import axios from "axios";
import DB from './db';
import { Login } from "./login";

export namespace OAuth {
    export function generate_oauth_authorisation_url(provider: any, redirect_uri: string, global_values: Object[]): string {
        console.log(`data ${provider}`);
        const base_url = provider["authorisation_base_url"];
        const client_id = provider["client_id"];
        const scope = provider["provider_scope"];
        console.log(`${base_url} ${client_id} ${scope}`);
        let state = uuid4();
        const now = new Date();
        const expiration = new Date(now.getTime() + (60 * 60 * 1000))
        global_values.push({
            state: state,
            expiration: expiration
        });
        state += `:${provider["provider_name"]}`;
        let completed_url = "";
        if (provider["provider_name"] === "google") {
            completed_url = `access_type=offline&client_id=${client_id}&redirect_uri=${redirect_uri}&prompt=consent`;
        } else {
            completed_url = `client_id=${client_id}&redirect_uri=${redirect_uri}`;
        }
        completed_url += `&response_type=code&scope=${scope}&state=${state}`;
        var final_url = "";
        for (var i = 0; i < completed_url.length; i++) {
            if (completed_url[i] === " ") {
                final_url += "%20";
            } else if (completed_url[i] === ":") {
                final_url += "%3A";
            } else if (completed_url[i] === "/") {
                final_url += "%2F";
            } else if (completed_url[i] === "?") {
                final_url += "%3F";
                // } else if (completed_url[i] === "&") {
                //     final_url += "%26";
            } else {
                final_url += completed_url[i];
            }
        }
        final_url = base_url + "?" + final_url;
        console.log(`Completed url = ${completed_url}`);
        console.log(`final_url = ${final_url}`);
        return final_url;
    };

    // For the callback
    export async function exchange_code_for_token(code: string, provider_data: any, redirect_uri: string) {
        try {
            const response = await axios.post(
                provider_data["token_grabber_base_url"],
                {
                    "client_id": provider_data["client_id"],
                    "client_secret": provider_data["client_secret"],
                    "code": code,
                    "redirect_uri": redirect_uri,
                    "grant_type": "authorization_code"
                },
                {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            )
            console.log(response);
            console.log(`Response data: ${JSON.stringify(response.data)}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    export async function get_user_information(provider_data: any, access_token: string, database: DB) {
        const user_info_getter_url = provider_data["user_info_base_url"]
        console.log(`User info getter url: ${user_info_getter_url}`);

        try {
            const response = await axios.get(
                user_info_getter_url,
                {
                    headers: {
                        "Authorization": `Bearer ${access_token}`
                    }
                }
            )
            console.log(`User info getter response without stringify: ${response}`);
            console.log(`User info getter response with stringify: ${JSON.stringify(response.data)}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    export async function insert_user_in_db(user_email: string, provider_data: any, user_oauth_info: any[], database: DB) {
        await database.writeToTable("users", ["email"], [user_email]);
        const user_id = await database.getContentFromTable("users", ["id"], `email = '${user_email}'`);
        if (!user_id || user_id.length === 0) {
            console.log("Failed to retrieve user id from created user.");
            return null;
        }
        user_oauth_info.push(user_id[0]["id"]);
        user_oauth_info.push(provider_data["id"]);
        console.log(`User information to insert in Oauth connections table: ${user_oauth_info}`);
        await database.writeToTable("sso_connections", ["token", "expiration", "lifespan", "refresh_link", "user_id", "service_id"], user_oauth_info);
        const token = await Login.log_user_in(user_email, database);
        console.log(`Token: ${token}`);
        return token;
    };

    export async function log_oauth_user(user_email: string, provider_data: any, user_oauth_info: any[], database: DB) {
        const user_from_db = await database.getContentFromTable('users', ['*'], `email = '${user_email}'`);
        if (!user_from_db || user_from_db.length === 0) {
            console.log(`User not found, entering into insert user in db.`);
            return insert_user_in_db(user_email, provider_data, user_oauth_info, database);
        }
        console.log(`User found from db, entering into doing oauth connection normally.`);
        console.log(`User from db: ${user_from_db}`);
        const user_from_oauth_connection = await database.getContentFromTable("sso_connections", ["*"], `user_id = '${user_from_db["id"]}' AND service_id = '${provider_data["id"]}'`);
        if (!user_from_oauth_connection || user_from_oauth_connection.length === 0) {
            user_oauth_info.push(user_from_db[0]["id"]);
            user_oauth_info.push(provider_data["id"]);
            console.log(`User information to insert in Oauth connections table: ${user_oauth_info}`);
            await database.writeToTable("sso_connections", ["token", "expiration", "lifespan", "refresh_link", "user_id", "service_id"], user_oauth_info);
        }
        const token = await Login.log_user_in(user_email, database);
        console.log(`Token = ${token}`);
        return token;
    };

    export async function handle_provider_response(provider_response: any, provider_data: any, database: DB) {
        let user_oauth_info: any[] = [];
        let user_getter_response: any;

        user_oauth_info.push(provider_response["access_token"]);
        if (provider_data["provider_name"] === "github") {
            const now = new Date().toISOString().slice(0, 19).replace("T", " ");
            user_oauth_info.push(now);
            user_oauth_info.push(0);
            user_oauth_info.push("NULL");
        }
        console.log("Actual user oauth info", user_oauth_info);
        try {
            user_getter_response = await get_user_information(provider_data, provider_response["access_token"], database);
        } catch (error) {
            throw error;
        }

        let user_email = "";
        if (provider_data["provider_name"] === "github") {
            const foundItem = user_getter_response.find((item: any) => item.primary === true);
            user_email = foundItem["email"];
        } else {
            user_email = user_getter_response["email"];
        }
        console.log(`Got email: ${user_email}`);
        const token = await log_oauth_user(user_email, provider_data, user_oauth_info, database);
        return token;
    };
};

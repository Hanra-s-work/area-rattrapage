/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** oauth.ts
*/

import uuid4 from "uuid4";
import axios from "axios";
import DB from './db';

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

    export function handle_provider_response(provider_response: any, provider_name: string, database: DB) {
        let user_oauth_info: any[] = [];

        user_oauth_info.push(provider_response["access_token"]);
        if (provider_name === "github") {
            user_oauth_info.push(Date.now());
            user_oauth_info.push(0);
            user_oauth_info.push("NULL");
        }
        console.log("Actual user oauth info", user_oauth_info);
        // get_user_information(provider_name, provider_response["access_token"], database);
    };
};

/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** querier.ts
*/

export namespace Query {
    export const url: string = "https://dashboard-back.pingpal.news";
    export const port: number = -1;


    export async function query(
        method: string = "GET",
        path: string = "/",
        body: Record<string, unknown> = {},
        token: string = "",
        base_url: string = "",
        headers: Record<string, string> = {},
    ): Promise<any> {
        try {
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            const payload: RequestInit = {
                method,
                mode: "cors",
                headers,
            };

            if (method !== "GET" && Object.keys(body).length > 0) {
                payload.body = JSON.stringify(body);
            }

            const finalBase: string = base_url === "" ? url : base_url;
            const finalUrl: string = port === -1 ? `${finalBase}${path}` : `${finalBase}:${port}${path}`;

            // console.log("Final URL:", finalUrl);
            // console.log("Payload:", payload);

            const response: Response = await fetch(finalUrl, payload);

            // console.log("Response:", response);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return error;
        }
    }

    export async function get(path: string = "/", body: Record<string, unknown> = {}, token: string = "", base_url: string = "", headers: Record<string, string> = {}) {
        return await query("GET", path, body, token, base_url, headers);
    }

    export async function put(path: string = "/", body: Record<string, unknown> = {}, token: string = "", base_url: string = "", headers: Record<string, string> = {}) {
        return await query("PUT", path, body, token, base_url, headers);
    }

    export async function post(path: string = "/", body: Record<string, unknown> = {}, token: string = "", base_url: string = "", headers: Record<string, string> = {}) {
        return await query("POST", path, body, token, base_url, headers);
    }

    export async function patch(path: string = "/", body: Record<string, unknown> = {}, token: string = "", base_url: string = "", headers: Record<string, string> = {}) {
        return await query("PATCH", path, body, token, base_url, headers);
    }

    export async function deleteQuery(path: string = "/", body: Record<string, unknown> = {}, token: string = "", base_url: string = "", headers: Record<string, string> = {}) {
        return await query("DELETE", path, body, token, base_url, headers);
    }
};

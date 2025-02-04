/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** querier.mjs
*/

console.log("js/querier initialising");

const url = "https://dashboard-back.pingpal.news";
const port = -1;

async function query(method = "GET", path = "/", body = {}, token = "") {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const payload = {
            method: method,
            mode: "cors",
            headers: headers,
        };

        if (method !== "GET" && Object.keys(body).length > 0) {
            payload.body = JSON.stringify(body);
        }

        let final_url;

        if (port === -1) {
            final_url = `${url}${path}`;
        } else {
            final_url = `${url}:${port}${path}`;
        }
        console.log("Final URL:", final_url);
        console.log("Payload:", payload);
        const response = await fetch(final_url, payload);
        console.log(response);
        if (!response.ok) {
            var data = await response.json();
            data.status = response.status;
            data.ok = response.ok;
            return data;
        }
        console.log(response);
        var data = await response.json();
        data.status = response.status;
        data.ok = response.ok;
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        var data = await response.json();
        data.status = response.status;
        data.ok = response.ok;
        return data;
    }
}

async function get(path = "/", body = {}, token = "") {
    return await query("GET", path, body, token);
}

async function put(path = "/", body = {}, token = "") {
    return await query("PUT", path, body, token);
}

async function post(path = "/", body = {}, token = "") {
    return await query("POST", path, body, token);
}

async function patch(path = "/", body = {}, token = "") {
    return await query("PATCH", path, body, token);
}

async function delete_query(path = "/", body = {}, token = "") {
    return await query("DELETE", path, body, token);
}

const queries = {
    query,
    get,
    put,
    post,
    patch,
    delete_query
};

export { queries };

window.querier = queries;

console.log("js/querier initialised");

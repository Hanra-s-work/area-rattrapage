/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** index.js
*/

/**
 * @file index.js
 * @brief Main file of the app
 */

// the express library
import express, { Express, Request, Response } from 'express';
// The body-parser library (to parse the body contained in the requests)
import body_parser from 'body-parser';
// The dotenv library (to allow the app to track the environment variables)
import dotenv from 'dotenv';
// The cors library (to allow the app to accept requests from other origins)
import cors from 'cors';

import { BuildResponse as build_response } from './modules/build_response';
import { SpeakOnCorrectStatus as speak_on_correct_status } from './modules/speak_on_correct_status';
import { CONSTANTS as CONST } from './modules/constants';

// The arg_parser module
import { Args } from './arg_parser'; // Assuming args have a type defined in `arg_parser.ts`

import DB from './modules/db';

import { OAuth } from './modules/oauth';

// Load environment variables
const env = process.env;

const db_host = env?.DB_HOST || 'localhost';
const db_user = env?.DB_USER || 'root';
const db_password = env?.DB_PASSWORD || '';
const db_name = env?.DB_DATABASE || 'dashboard';
const db_port = Number(env?.DB_PORT || "3306");

const database = new DB(
    db_host,
    db_user,
    db_password,
    db_name,
    db_port
);

// The app object representing the Express application
const app: Express = express();

var global_values: any = [];

const corsOptions = {
    origin: "*",
    methods: "GET,POST,PUT,DELETE,HEAD,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(body_parser.json());

// Default path
app.get('/', (req: Request, res: Response): void => {
    build_response.build_and_send_response(res, speak_on_correct_status.success, "/", "Hello, World!", "success", "", false);
});

// Info route to return server address and port
app.get('/info', (req: Request, res: Response): void => {
    const title = "/info";
    console.log(`endpoint: ${req.url}`);
    const address = server?.address();
    if (address && typeof address !== 'string') {
        const host = address.address === '::' ? 'localhost' : address.address;
        const port = address.port;

        build_response.build_and_send_response(res, speak_on_correct_status.success, title, `The server is listening on host: ${host} at port: ${port}`, { host, port }, "", false);
    } else {
        build_response.build_and_send_response(res, speak_on_correct_status.internal_server_error, title, `Unable to retrieve server address`, "Error", "", true);
    }
});

app.post('/shutdown', async (req, res) => {
    var title = '/shutdown';
    console.log(`endpoint: ${req.url}`);
    const token = req.headers.authorization;
    console.log(`token: ${token}`);
    const data = await database.getContentFromTable('users', ['*'], `token = ${token}`);
    console.log(data);
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Shutting down the server', 'Success', '', false);
    // await db.disconnect_from_database(global.connection);
    process.exit(CONST.SUCCESS);
});


app.get('/oauth/login/:provider', async (req, res) => {
    var title = "sso login";
    console.log(`endpoint: ${req.url}`);
    const prov = req.params.provider;
    console.log(`params: ${JSON.stringify(req.params)}`);
    if (!prov) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Missing provider', 'Error', '', true);
        return;
    }
    const provider = prov;
    const data = await database.getContentFromTable('sso_oauth', ['*'], 'provider_name = "' + provider + '"');
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid provider', 'Error', '', true);
        return;
    }
    console.log(data);
    const authorisation_url = OAuth.generate_oauth_authorisation_url(data[0], env?.REDIRECT_URI || "", global_values);
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', authorisation_url, '', false);
})

app.post("/oauth/callback", async (req, res) => {
    const title = "sso callback";
    console.log(`endpoint ${req.url}`);
    const body = req.body

    if (!body.code) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Missing code from the callback url', 'Error', '', true);
        return;
    }
    console.log(body);
    const splitted_body = body["code"].split("&");
    console.log(splitted_body);
    const splitted_state = splitted_body[1].split(":");
    console.log(splitted_state);

    let code = splitted_body[0];
    let generated_uuid = splitted_state[0];
    const got_provider = splitted_state[1];
    code = code.replace("code=", "");
    generated_uuid = generated_uuid.replace("state=", "");
    console.log(code);
    console.log(generated_uuid);

    console.log(`Global values before checking: ${JSON.stringify(global_values)}`);
    if (code.length === 0 || generated_uuid.length === 0 || got_provider === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Missing information from the callback url', 'Error', '', true);
        return;
    }
    const uuid_exists = global_values.some((item: any) => item.state === generated_uuid);

    if (uuid_exists === false) {
        console.log("The uuid doesn't exist in the back.");
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'The state from the callback url is incorrect', 'Error', '', true);
        return;
    };

    console.log(`Global values before removing the state: ${JSON.stringify(global_values)}`);
    const index = global_values.findIndex((item: any) => item.state === generated_uuid);

    if (index !== -1) {
        global_values.splice(index, 1);
    }
    console.log(`Global values after removing the state: ${global_values}`);

    const provider_data = await database.getContentFromTable('sso_oauth', ['*'], `provider_name = '${got_provider}'`);

    if (provider_data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'The given provider is not correct.', 'Error', '', true);
        return;
    }
    console.log(provider_data);
    let provider_response;
    try {
        provider_response = await OAuth.exchange_code_for_token(code, provider_data[0], env?.REDIRECT_URI || "");
    } catch (error) {
        build_response.build_and_send_response(res, speak_on_correct_status.unauthorized, title, 'The code exchanger has failed.', 'Unauthorized', '', true);
        return;
    }
    console.log(provider_response);
    if (provider_data["access_token"].length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.unauthorized, title, 'The access token was not retrieved correctly.', 'Unauthorized', '', true);
        return;
    }
    OAuth.handle_provider_response(provider_response, got_provider, database);
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, '', 'Success', '', false);
})


app.get("/user/about", async (req, res) => {
    const title = "/user/about";
    console.log(`endpoint: ${req.url}`);
    const token = req.headers.authorization;
    console.log(`token: ${token}`);
    if (!token) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Missing token', 'Error', '', true);
        return;
    }
    const data = await database.getContentFromTable('users', ['*'], `token = ${token}`);
    console.log(data);
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }
    const final = {
        id: data[0].id,
        username: data[0].username
    };
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', final, '', false);
});

app.get("/user/widgets", async (req, res) => { });

app.patch("/user/widgets", async (req, res) => { });

app.delete("/logout", async (req, res) => {
    const title = "/user/about";
    console.log(`endpoint: ${req.url}`);
    const token = req.headers.authorization;
    console.log(`token: ${token}`);
    const data = await database.getContentFromTable('users', ['*'], `token = ${token}`);
    console.log(data);
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }
    await database.updateTable('users', ['token'], [null], "token = ?", [`${token}`]);
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', "success", '', false);
});

// Export the app for testing purposes
export default app

// Define server variable to be accessible globally
let server: any;

// Start the server if not in test mode
if (require.main === module) {

    // Port and IP configuration
    const port: number = Number(env?.port || env?.PORT || Args.get_port() || 5000);
    const ip: string = env?.ip || env?.IP || Args.get_ip() || '0.0.0.0';

    // Start the server
    server = app.listen(port, ip, (): void => {
        const serverAddress = server.address();
        if (serverAddress) {
            console.log(`Server is running on http://${serverAddress.address}:${serverAddress.port}`);
        }
    });
}

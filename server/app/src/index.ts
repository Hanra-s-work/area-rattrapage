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
// The cors library (to allow the app to accept requests from other origins)
import cors from 'cors';

import { BuildResponse as build_response } from './modules/build_response';
import { SpeakOnCorrectStatus as speak_on_correct_status } from './modules/speak_on_correct_status';
import { CONSTANTS as CONST } from './modules/constants';

// The arg_parser module
import { Args } from './arg_parser'; // Assuming args have a type defined in `arg_parser.ts`

import DB from './modules/db';

import { OAuth } from './modules/oauth';
import { Login } from './modules/login';

import { Widgets } from './modules/widgets';

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
    methods: "GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(body_parser.json());

// Default path
app.get('/', (req: Request, res: Response): void => {
    console.log(`endpoint: get: ${req.url}`);
    build_response.build_and_send_response(res, speak_on_correct_status.success, "/", "Hello, World!", "success", "", false);
});

app.post('/', (req: Request, res: Response): void => {
    console.log(`endpoint: post: ${req.url}`);
    build_response.build_and_send_response(res, speak_on_correct_status.success, "/", "Hello, World!", "success", "", false);
});

app.put('/', (req: Request, res: Response): void => {
    console.log(`endpoint: put: ${req.url}`);
    build_response.build_and_send_response(res, speak_on_correct_status.success, "/", "Hello, World!", "success", "", false);
});

app.patch('/', (req: Request, res: Response): void => {
    console.log(`endpoint: patch: ${req.url}`);
    build_response.build_and_send_response(res, speak_on_correct_status.success, "/", "Hello, World!", "success", "", false);
});

app.delete('/', (req: Request, res: Response): void => {
    console.log(`endpoint: delete: ${req.url}`);
    build_response.build_and_send_response(res, speak_on_correct_status.success, "/", "Hello, World!", "success", "", false);
});

app.head('/', (req: Request, res: Response): void => {
    console.log(`endpoint: head: ${req.url}`);
    build_response.build_and_send_response(res, speak_on_correct_status.success, "/", "Hello, World!", "success", "", false);
});

app.options('/', (req: Request, res: Response): void => {
    console.log(`endpoint: options: ${req.url}`);
    build_response.build_and_send_response(res, speak_on_correct_status.success, "/", "Hello, World!", "success", "", false);
});

// Info route to return server address and port
app.get('/info', (req: Request, res: Response): void => {
    const title = "/info";
    console.log(`endpoint: get: ${req.url}`);
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
    console.log(`endpoint: post: ${req.url}`);
    const token = req.headers.authorization;
    console.log(`token: ${token}`);
    const data = await database.getContentFromTable('users', ['*'], `token = ${token}`);
    // console.log(data);
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Shutting down the server', 'Success', '', false);
    process.exit(CONST.SUCCESS);
});


app.get('/oauth/login/:provider', async (req, res) => {
    var title = "sso login";
    console.log(`endpoint: get: ${req.url}`);
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
    // console.log(data);
    const authorisation_url = OAuth.generate_oauth_authorisation_url(data[0], env?.REDIRECT_URI || "", global_values);
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', authorisation_url, '', false);
})

app.post("/oauth/callback", async (req, res) => {
    const title = "sso callback";
    console.log(`endpoint: post: ${req.url}`);
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
    // console.log(code);
    // console.log(generated_uuid);

    // console.log(`Global values before checking: ${JSON.stringify(global_values)}`);
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
    // console.log(`Global values after removing the state: ${global_values}`);

    const provider_data = await database.getContentFromTable('sso_oauth', ['*'], `provider_name = '${got_provider}'`);

    if (provider_data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'The given provider is not correct.', 'Error', '', true);
        return;
    }
    // console.log(provider_data);
    let provider_response;
    try {
        provider_response = await OAuth.exchange_code_for_token(code, provider_data[0], env?.REDIRECT_URI || "");
    } catch (error) {
        build_response.build_and_send_response(res, speak_on_correct_status.unauthorized, title, 'The code exchanger has failed.', 'Unauthorized', '', true);
        return;
    }
    // console.log(provider_response);
    if (provider_response["access_token"].length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.unauthorized, title, 'The access token was not retrieved correctly.', 'Unauthorized', '', true);
        return;
    }
    try {
        const token = await OAuth.handle_provider_response(provider_response, provider_data[0], database);
        if (token === null) {
            build_response.build_and_send_response(res, speak_on_correct_status.unauthorized, title, 'The token response handler has failed.', 'Unauthorized', '', true);
            return;
        }
        build_response.build_and_send_response(res, speak_on_correct_status.success, title, '', { "token": token }, token, false);
    } catch (error) {
        build_response.build_and_send_response(res, speak_on_correct_status.unauthorized, title, 'The token response handler has failed.', 'Unauthorized', '', true);
        return;
    }
})


app.get("/user/about", async (req, res) => {
    const title = `${req.url}`;
    console.log(`endpoint: get: ${req.url}`);
    let token = req.headers.authorization;
    console.log(`token: ${token}`);
    if (!token) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Missing token', 'Error', '', true);
        return;
    }
    token = token.replace("Bearer ", "");
    console.log(`Token without bearer: ${token}`);
    const data = await database.getContentFromTable('users', ['*'], `token = '${token}'`);
    // console.log(data);
    if (!data || data.length === 0) {
        console.log("No data");
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }
    console.log("After data");
    const final = {
        id: Number(data[0].id),
        username: String(data[0].name),
        email: String(data[0].email),
    };
    // console.log(`Final: ${final}`);
    // console.log(final);
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', final, '', false);
});

app.post('/login', async (req, res) => {
    const title = `${req.url}`;
    console.log(`endpoint: post: ${req.url}`);
    const email = req.body.email;
    const password = req.body.password;
    console.log("email: ", email, "password: ", password);
    console.log("getting user from the database if it exists");
    const data = await database.getContentFromTable('users', ['*'], `email = '${email}'`);
    if (data.length === 0) {
        console.log("No user");
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid email or password', 'Error', '', true);
        return;
    }
    console.log("user exists, loging them in");
    const login_response = await Login.log_local_user_in(email, password, database);
    if (login_response === null) {
        console.log("login response is null");
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid email or password', 'Error', '', true);
        return;
    }
    // console.log("login response: ", login_response);
    const final = {
        id: Number(data[0].id),
        username: String(data[0].name),
        email: String(data[0].email),
        token: String(login_response),
    };
    // console.log(`final:`, final);
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', final, '', false);
});

app.post('/register', async (req, res) => {
    const title = `${req.url}`;
    console.log(`endpoint: post: ${req.url}`);
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;

    console.log("email: ", email, "password: ", password, "username: ", username);

    console.log("Checking fields");

    if (!email || !password || !username) {
        console.log("Missing email, password or username");
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Missing email, password or username', 'Error', '', true);
        return;
    }

    console.log("Checking if user already exists");

    const response = await Login.register_user(username, email, password, database);
    if (response === false) {
        console.log("response is false");
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'The user has not been registered.', 'Error', '', true);
        return;
    }

    console.log("User registered");

    console.log("Checking if user exists");

    const data = await database.getContentFromTable('users', ['*'], `email = '${email}'`);
    if (data.length === 0) {
        console.log("No user");
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid email or password', 'Error', '', true);
        return;
    }

    console.log("User exists, logging them in");

    const login_response = await Login.log_local_user_in(email, password, database);
    if (login_response === null) {
        console.log("login response is null");
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid email or password', 'Error', '', true);
        return;
    }

    // console.log("login response: ", login_response);

    const final = {
        id: Number(data[0].id),
        username: String(data[0].name),
        email: String(data[0].email),
        token: String(login_response),
    };
    // console.log(`final:`, final);
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', final, '', false);
});

app.get("/user/widgets", async (req, res) => {
    const title = `${req.url}`;
    console.log(`endpoint: get: ${req.url}`);
    const token = req.headers.authorization;
    console.log(`token: ${token}`);
    const token_cleaned = token?.replace("Bearer ", "") || "";
    console.log(`token cleaned: ${token_cleaned}`);
    const data = await database.getContentFromTable('users', ['*'], `token = '${token_cleaned}'`);
    // console.log(data);
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }
    const user_data = await Widgets.get_user_widgets(data[0], database);
    // console.log("user_data: ", user_data);
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', user_data, '', false);
});

app.patch("/user/widget/:user_widget_id/:widget_type", async (req, res) => {
    const title = `${req.url}`;
    console.log(`endpoint: patch: ${req.url}`);
    // Correctly extract widgetId
    const widgetId = req.params.user_widget_id;
    console.log(`widgetId: ${widgetId}`);
    // Correctly extract widgetId
    const widgetType = req.params.widget_type;
    console.log(`widgetId: ${widgetType}`);

    // Extract and clean token
    const token = req.headers.authorization;
    console.log(`token: ${token}`);
    const token_cleaned = token?.replace("Bearer ", "") || "";
    console.log(`token cleaned: ${token_cleaned}`);

    // Validate user with token
    const data = await database.getContentFromTable('users', ['*'], `token = '${token_cleaned}'`);
    // console.log(data);
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }

    // Ensure widgetId is provided
    if (!widgetId) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Missing widget id', 'Error', '', true);
        return;
    }

    console.log("displaying body");
    console.log("req.body: ", req.body);

    // Extract optional location parameter
    const location = req.body.location ?? null;

    console.log("displaying body");
    console.log("location: ", location);

    // Process widget addition
    const user_data = await Widgets.update_user_widget(data[0], widgetId, widgetType, location, database);
    // console.log(user_data);

    if (user_data === false) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'The widget has not been updated.', 'Error', '', true);
        return;
    }

    // Send response
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', user_data, '', false);
});

app.post("/user/widget/:id/:location?", async (req, res) => {
    const title = `${req.url}`;
    console.log(`endpoint: post: ${req.url}`);

    // Correctly extract widgetId
    const widgetId = req.params.id;
    console.log(`widgetId: ${widgetId}`);

    // Extract and clean token
    const token = req.headers.authorization;
    console.log(`token: ${token}`);
    const token_cleaned = token?.replace("Bearer ", "") || "";
    console.log(`token cleaned: ${token_cleaned}`);

    // Validate user with token
    const data = await database.getContentFromTable('users', ['*'], `token = '${token_cleaned}'`);
    // console.log(data);
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }

    // Ensure widgetId is provided
    if (!widgetId) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Missing widget id', 'Error', '', true);
        return;
    }

    // Extract optional location parameter
    const location = req.params.location ?? null;

    // Process widget addition
    const user_data = await Widgets.add_user_widget(data[0], widgetId, location, database);
    // console.log("user_data: ", user_data);

    if (user_data === false) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'The widget has not been added.', 'Error', '', true);
        return;
    }

    // Send response
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', user_data, '', false);
});


app.delete("/user/widget/:id", async (req, res) => {

    const title = `${req.url}`;
    console.log(`endpoint: delete: ${req.url}`);
    const widgetId = req.params.id;
    console.log(`widgetId: ${widgetId}`);
    const token = req.headers.authorization;
    console.log(`token: ${token}`);
    const token_cleaned = token?.replace("Bearer ", "") || "";
    console.log(`token cleaned: ${token_cleaned}`);
    const data = await database.getContentFromTable('users', ['*'], `token = '${token_cleaned}'`);
    console.log(data);
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }
    if (!widgetId) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Missing widget id', 'Error', '', true);
        return;
    }
    const user_data = await Widgets.delete_user_widget(data[0], widgetId, database);
    // console.log(user_data);
    if (user_data === false) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'The widget has not been deleted.', 'Error', '', true);
        return;
    }
    const user_widgets = await Widgets.get_user_widgets(data[0], database);
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', user_widgets, '', false);
});

app.get("/widgets", async (req, res) => {
    const title = `${req.url}`;
    console.log(`endpoint: get: ${req.url}`);
    const token = req.headers.authorization;
    console.log(`token: ${token}`);
    const token_cleaned = token?.replace("Bearer ", "") || "";
    console.log(`token cleaned: ${token_cleaned}`);
    const data = await database.getContentFromTable('users', ['*'], `token = '${token_cleaned}'`);
    // console.log(data);
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }
    const widgets = await Widgets.get_available_widget_names();
    // console.log(widgets);
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', widgets, '', false);
});

app.get("/widget/:name", async (req, res) => {

    const title = `${req.url}`;
    console.log(`endpoint: get: ${req.url}`);
    const widgetId = req.params.name;
    console.log(`widgetId: ${widgetId}`);
    const token = req.headers.authorization;
    console.log(`token: ${token}`);
    const token_cleaned = token?.replace("Bearer ", "") || "";
    console.log(`token cleaned: ${token_cleaned}`);
    const data = await database.getContentFromTable('users', ['*'], `token = '${token_cleaned}'`);
    // console.log(data);
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }
    if (!widgetId) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Missing widget id', 'Error', '', true);
        return;
    }
    const user_data = await Widgets.get_widget_info(data, widgetId, database);
    // console.log(user_data);
    if (user_data === false) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, '<p>Widget gathering error, the content for the given widget could not be fetched successfully.</p>', 'Error', '', true);
        return;
    }
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', user_data, '', false);
});

app.delete("/logout", async (req, res) => {
    const title = `${req.url}`;
    console.log(`endpoint: delete: ${req.url}`);
    const token = req.headers.authorization;
    console.log(`token: ${token}`);
    const token_cleaned = token?.replace("Bearer ", "") || "";
    console.log(`token cleaned: ${token_cleaned}`);
    const data = await database.getContentFromTable('users', ['*'], `token = '${token_cleaned}'`);
    // console.log(data);
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }
    const logout_response = await Login.log_user_out(token_cleaned, database);
    if (logout_response === false) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'The user has not been logged out.', 'Error', '', true);
        return;
    }
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', "success", '', false);
});

app.post("/user/sso", async (req, res) => {
    const title = `${req.url}`;
    console.log(`endpoint: post: ${req.url}`);
    const token = req.headers.authorization;
    const body = req.body;
    const username = body.username;
    const password = body.password;

    console.log(`body: ${JSON.stringify(body)}`);
    console.log("title: ", title, "token: ", token, "username: ", username, "password: ", password);

    if (!token) {
        console.log("No token");
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Missing token', 'Error', '', true);
        return;
    }
    console.log("token is present");
    if (!username || !password) {
        console.log("No username or password");
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Missing username or password', 'Error', '', true);
        return;
    }
    console.log('username and password are present');
    const token_cleaned = token.replace("Bearer ", "");

    console.log("fetching data");
    const data = await database.getContentFromTable('users', ['*'], `token = '${token_cleaned}'`);
    console.log("data fetched");
    // console.log(data);
    if (!data || data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }

    // console.log("token ", token_cleaned, "username ", username, "password ", password);

    const response = await Login.update_user_information(token_cleaned, username, password, database);
    // console.log("Response: ", response);
    if (response === false) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'The user information has not been updated.', 'Error', '', true);
        return;
    }
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', 'Success', '', false);
});

app.get("/refresh", async (req, res) => {
    console.log(`endpoint: get: ${req.url}`);
    const title = `${req.url}`;
    const token = req.headers.authorization;
    console.log(`token: ${token}`);
    const token_cleaned = token?.replace("Bearer ", "") || "";
    console.log(`token cleaned: ${token_cleaned}`);
    const data = await database.getContentFromTable('users', ['*'], `token = '${token_cleaned}'`);
    console.log(data);
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }
    console.log("data: ", data);
    const refresh = Number(data[0].refresh);
    // console.log(`refresh: ${refresh}`);
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', { "refresh": refresh }, '', false);
});

app.post("/refresh/:refresh", async (req, res) => {
    const title = `${req.url}`;
    console.log(`endpoint: post: ${req.url}`);
    const refreshDelay = Number(req.params.refresh);
    console.log(`refreshDelay: ${refreshDelay}`);
    const token = req.headers.authorization;
    console.log(`token: ${token}`);
    const token_cleaned = token?.replace("Bearer ", "") || "";
    console.log(`token cleaned: ${token_cleaned}`);
    const data = await database.getContentFromTable('users', ['*'], `token = '${token_cleaned}'`);
    // console.log(data);
    if (data.length === 0) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Invalid token', 'Error', '', true);
        return;
    }
    if (!refreshDelay || refreshDelay < 0 || Number.isNaN(refreshDelay)) {
        build_response.build_and_send_response(res, speak_on_correct_status.bad_request, title, 'Missing or invalid refresh delay', 'Error', '', true);
        return;
    }
    await database.updateTable('users', ['refresh'], [refreshDelay], 'token = ?', [token_cleaned]);
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Success', "Success", '', false);
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

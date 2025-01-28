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

// Load environment variables
const env = dotenv.config().parsed;

// The app object representing the Express application
const app: Express = express();

// Middleware to parse JSON
app.use(body_parser.json());

// Default path
app.get('/', (req: Request, res: Response): void => {
    build_response.build_and_send_response(res, speak_on_correct_status.success, "/", "Hello, World!", "success", "", false);
});

// Info route to return server address and port
app.get('/info', (req: Request, res: Response): void => {
    const title = "/info";
    const address = server?.address();
    if (address && typeof address !== 'string') {
        const host = address.address === '::' ? 'localhost' : address.address;
        const port = address.port;

        build_response.build_and_send_response(res, speak_on_correct_status.success, title, `The server is listening on host: ${host} at port: ${port}`, { host, port }, "", false);
    } else {
        build_response.build_and_send_response(res, speak_on_correct_status.internal_server_error, title, `Unable to retrieve server address`, "Error", "", true);
    }
});

app.post('/shutdown', (req, res) => {
    var title = '/shutdown';
    // if (global.is_logged_in === false) {
    //     return build_response.build_and_send_response(res, speak_on_correct_status.unauthorized, title, 'You are not logged in', 'Error', '', true);
    // }
    // const usr_logged_in = mauth.check_json_token(req, process.env.SECRET);
    // if (usr_logged_in != "Connection success") {
    //     return build_response.build_and_send_response(res, speak_on_correct_status.unauthorized, title, 'You are not logged in', 'Error', '', true);
    // }
    build_response.build_and_send_response(res, speak_on_correct_status.success, title, 'Shutting down the server', 'Success', '', false);
    // await db.disconnect_from_database(global.connection);
    process.exit(CONST.SUCCESS);
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

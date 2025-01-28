/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** build_response.ts
*/

import { Response } from "express";
import { TokenManagement as token_management } from "./token_management";
import { SpeakOnCorrectStatus as speak_on_correct_status, SpeakOnCorrectStatus } from "./speak_on_correct_status";

export namespace BuildResponse {
    // Type alias for a function that handles response and JSON
    export type ResponseFunction = (res: Response, json: object) => void;

    /**
     * Builds a response JSON object based on the given parameters.
     *
     * @param {string} title - The title of the response.
     * @param {string} message - The message of the response.
     * @param {any} resp - The response payload.
     * @param {string} token - The token to validate.
     * @param {boolean} [error=false] - Whether the response is an error response.
     * @returns {object} The constructed JSON response object.
     */
    export function build_response(
        title: string,
        message: string,
        resp: any,
        token: string,
        error: boolean = false
    ): object {
        // Create a response object dynamically using JavaScript native object literals
        const json_body: { [key: string]: any } = {
            title,     // Add title property
            message,   // Add message property
            logged_in: token_management.is_token_correct(token),  // Check if the token is correct
        };

        // Add the response or error dynamically based on the 'error' flag
        if (error) {
            json_body.error = resp;  // If it's an error, add the error response
        } else {
            json_body.resp = resp;   // Otherwise, add the regular response
        }

        return json_body;  // Return the dynamically constructed object
    }

    /**
     * Overload signatures for send_response function.
     * 
     * When the status is a number (HTTP status code):
     * 
     * @param {Response} res - The Express response object.
     * @param {number} status - The HTTP status code to send.
     * @param {object} json - The JSON response to send.
     * 
     * When the status is a function (custom handler):
     * 
     * @param {Response} res - The Express response object.
     * @param {ResponseFunction} status - A function that handles the response.
     * @param {object} json - The JSON response to send.
     */
    export function send_response(
        res: Response,
        status: number,
        json: object
    ): void;  // Signature when status is a number (HTTP status code)

    export function send_response(
        res: Response,
        status: ResponseFunction,
        json: object
    ): void;  // Signature when status is a function

    /**
     * Sends a JSON response to the client with a specified HTTP status.
     * Handles both number (status code) and function (custom handler).
     *
     * @param {Response} res - The Express response object.
     * @param {number|ResponseFunction} status - The HTTP status code or custom handler function.
     * @param {object} json - The JSON response to send.
     */
    export function send_response(
        res: Response,
        status: number | ResponseFunction,
        json: object
    ): void {
        if (typeof status === 'function') {
            status(res, json);  // Call the function if status is a function
        } else {
            speak_on_correct_status.send_message_on_status(res, status, json);  // Otherwise, use status as the code
        }
    }

    /**
     * Overload signatures for build_and_send_response function.
     * 
     * When the status is a number (HTTP status code):
     * 
     * @param {Response} res - The Express response object.
     * @param {number} status - The HTTP status code to send.
     * @param {string} title - The title of the response.
     * @param {string} message - The message of the response.
     * @param {any} resp - The response payload.
     * @param {string} token - The token to validate.
     * @param {boolean} [error=false] - Whether the response is an error response.
     * 
     * When the status is a function (custom handler):
     * 
     * @param {Response} res - The Express response object.
     * @param {ResponseFunction} status - A function that handles the response.
     * @param {string} title - The title of the response.
     * @param {string} message - The message of the response.
     * @param {any} resp - The response payload.
     * @param {string} token - The token to validate.
     * @param {boolean} [error=false] - Whether the response is an error response.
     */
    export function build_and_send_response(
        res: Response,
        status: number,
        title: string,
        message: string,
        resp: any,
        token: string,
        error?: boolean
    ): void;

    export function build_and_send_response(
        res: Response,
        status: ResponseFunction,
        title: string,
        message: string,
        resp: any,
        token: string,
        error?: boolean
    ): void;

    /**
     * Builds a JSON response and sends it to the client.
     * Handles both number (status code) and function (custom handler).
     *
     * @param {Response} res - The Express response object.
     * @param {number|ResponseFunction} status - The HTTP status code or custom handler function.
     * @param {string} title - The title of the response.
     * @param {string} message - The message of the response.
     * @param {any} resp - The response payload.
     * @param {string} token - The token to validate.
     * @param {boolean} [error=false] - Whether the response is an error response.
     */
    export function build_and_send_response(
        res: Response,
        status: number | ResponseFunction,
        title: string,
        message: string,
        resp: any,
        token: string,
        error: boolean = false
    ): void {
        const json = build_response(title, message, resp, token, error);

        if (typeof status === 'function') {
            status(res, json);
        } else {
            send_response(res, status, json);
        }
    }
};

/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** speak_on_correct_status.js
*/

import { Response } from "express";

export namespace SpeakOnCorrectStatus {
    // General send

    /**
     * Sends a JSON response with a given HTTP status.
     * @param res - The Express response object.
     * @param status - The HTTP status code (default: 200).
     * @param json - The JSON object to send.
     */
    export function send_message_on_status(res: Response, status: number = 200, json: object = { 'title': '<empty>', 'msg': 'message', 'token': '' }): void {
        res.status(status).json(json);
    }

    // 1xx informational response

    /**
     * Sends a "100 Continue" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function send_continue(res: Response, json: object): void {
        return send_message_on_status(res, 100, json);
    }

    /**
     * Sends a "101 Switching Protocols" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function switching_protocols(res: Response, json: object): void {
        return send_message_on_status(res, 101, json);
    }

    /**
     * Sends a "102 Processing" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function processing(res: Response, json: object): void {
        return send_message_on_status(res, 102, json);
    }

    /**
     * Sends a "103 Early Hints" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function early_hints(res: Response, json: object): void {
        return send_message_on_status(res, 103, json);
    }

    /**
     * Sends a "110 Response is Stale" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function response_is_stale(res: Response, json: object): void {
        return send_message_on_status(res, 110, json);
    }

    // 2xx successful
    /**
     * Sends a "200 Success" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function success(res: Response, json: object): void {
        return send_message_on_status(res, 200, json);
    }

    /**
     * Sends a "201 Created" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function created(res: Response, json: object): void {
        return send_message_on_status(res, 201, json);
    }

    /**
     * Sends a "202 Accepted" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function accepted(res: Response, json: object): void {
        return send_message_on_status(res, 202, json);
    }

    /**
     * Sends a "203 Non Authoritative Information" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function non_authoritative_information(res: Response, json: object): void {
        return send_message_on_status(res, 203, json);
    }

    /**
     * Sends a "204 No Content" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function no_content(res: Response, json: object): void {
        return send_message_on_status(res, 204, json);
    }

    /**
     * Sends a "205 Reset Content" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function reset_content(res: Response, json: object): void {
        return send_message_on_status(res, 205, json);
    }

    /**
     * Sends a "206 Partial Content" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function partial_content(res: Response, json: object): void {
        return send_message_on_status(res, 206, json);
    }

    /**
     * Sends a "207 Multi Status" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function multi_status(res: Response, json: object): void {
        return send_message_on_status(res, 207, json);
    }

    /**
     * Sends a "208 Already Reported" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function already_reported(res: Response, json: object): void {
        return send_message_on_status(res, 208, json);
    }

    /**
     * Sends a "226 Im Used" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function im_used(res: Response, json: object): void {
        return send_message_on_status(res, 226, json);
    }

    // 3xx redirection

    /**
     * Sends a "300 Multiple Choices" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function multiple_choices(res: Response, json: object): void {
        return send_message_on_status(res, 300, json);
    }

    /**
     * Sends a "301 Moved Permanently" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function moved_permanently(res: Response, json: object): void {
        return send_message_on_status(res, 301, json);
    }

    /**
     * Sends a "302 Found" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function found(res: Response, json: object): void {
        return send_message_on_status(res, 302, json);
    }

    /**
     * Sends a "303 See Other" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function see_other(res: Response, json: object): void {
        return send_message_on_status(res, 303, json);
    }

    /**
     * Sends a "304 Not Modified" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function not_modified(res: Response, json: object): void {
        return send_message_on_status(res, 304, json);
    }

    /**
     * Sends a "305 Use Proxy" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function use_proxy(res: Response, json: object): void {
        return send_message_on_status(res, 305, json);
    }

    /**
     * Sends a "306 Switch Proxy" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function switch_proxy(res: Response, json: object): void {
        return send_message_on_status(res, 306, json);
    }

    /**
     * Sends a "307 Temporary Redirect" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function temporary_redirect(res: Response, json: object): void {
        return send_message_on_status(res, 307, json);
    }

    /**
     * Sends a "308 Permanent Redirect" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function permanent_redirect(res: Response, json: object): void {
        return send_message_on_status(res, 308, json);
    }

    // 4xx client error

    /**
     * Sends a "400 Bad Request" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function bad_request(res: Response, json: object): void {
        return send_message_on_status(res, 400, json);
    }

    /**
     * Sends a "401 Unauthorized" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function unauthorized(res: Response, json: object): void {
        return send_message_on_status(res, 401, json);
    }

    /**
     * Sends a "402 Payment Required" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function payment_required(res: Response, json: object): void {
        return send_message_on_status(res, 402, json);
    }

    /**
     * Sends a "403 Forbidden" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function forbidden(res: Response, json: object): void {
        return send_message_on_status(res, 403, json);
    }

    /**
     * Sends a "404 Not Found" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function not_found(res: Response, json: object): void {
        return send_message_on_status(res, 404, json);
    }

    /**
     * Sends a "405 Method Not Allowed" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function method_not_allowed(res: Response, json: object): void {
        return send_message_on_status(res, 405, json);
    }

    /**
     * Sends a "406 Not Acceptable" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function not_acceptable(res: Response, json: object): void {
        return send_message_on_status(res, 406, json);
    }

    /**
     * Sends a "407 Proxy Authentication Required" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function proxy_authentication_required(res: Response, json: object): void {
        return send_message_on_status(res, 407, json);
    }

    /**
     * Sends a "408 Request Timeout" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function request_timeout(res: Response, json: object): void {
        return send_message_on_status(res, 408, json);
    }

    /**
     * Sends a "409 Conflict" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function conflict(res: Response, json: object): void {
        return send_message_on_status(res, 409, json);
    }

    /**
     * Sends a "410 Gone" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function gone(res: Response, json: object): void {
        return send_message_on_status(res, 410, json);
    }

    /**
     * Sends a "411 Length Required" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function length_required(res: Response, json: object): void {
        return send_message_on_status(res, 411, json);
    }

    /**
     * Sends a "412 Precondition Failed" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function precondition_failed(res: Response, json: object): void {
        return send_message_on_status(res, 412, json);
    }

    /**
     * Sends a "413 Payload Too Large" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function payload_too_large(res: Response, json: object): void {
        return send_message_on_status(res, 413, json);
    }

    /**
     * Sends a "414 Uri Too Long" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function uri_too_long(res: Response, json: object): void {
        return send_message_on_status(res, 414, json);
    }

    /**
     * Sends a "415 Unsupported Media Type" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function unsupported_media_type(res: Response, json: object): void {
        return send_message_on_status(res, 415, json);
    }

    /**
     * Sends a "416 Range Not Satisfiable" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function range_not_satisfiable(res: Response, json: object): void {
        return send_message_on_status(res, 416, json);
    }

    /**
     * Sends a "417 Expectation Failed" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function expectation_failed(res: Response, json: object): void {
        return send_message_on_status(res, 417, json);
    }

    /**
     * Sends a "418 Im A Teapot" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function im_a_teapot(res: Response, json: object): void {
        return send_message_on_status(res, 418, json);
    }

    /**
     * Sends a "421 Misdirected Request" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function misdirected_request(res: Response, json: object): void {
        return send_message_on_status(res, 421, json);
    }

    /**
     * Sends a "422 Unprocessable Entity" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function unprocessable_entity(res: Response, json: object): void {
        return send_message_on_status(res, 422, json);
    }

    /**
     * Sends a "423  locked" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function locked(res: Response, json: object): void {
        return send_message_on_status(res, 423, json);
    }

    /**
     * Sends a "424 Failed Dependency" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function failed_dependency(res: Response, json: object): void {
        return send_message_on_status(res, 424, json);
    }

    /**
     * Sends a "425 Too Early" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function too_early(res: Response, json: object): void {
        return send_message_on_status(res, 425, json);
    }

    /**
     * Sends a "426 Upgrade Required" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function upgrade_required(res: Response, json: object): void {
        return send_message_on_status(res, 426, json);
    }

    /**
     * Sends a "428 Precondition Required" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function precondition_required(res: Response, json: object): void {
        return send_message_on_status(res, 428, json);
    }

    /**
     * Sends a "429 Too Many Requests" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function too_many_requests(res: Response, json: object): void {
        return send_message_on_status(res, 429, json);
    }

    /**
     * Sends a "431 Request Header Fields Too Large" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function request_header_fields_too_large(res: Response, json: object): void {
        return send_message_on_status(res, 431, json);
    }

    /**
     * Sends a "451 Unavailable For Legal Reasons" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function unavailable_for_legal_reasons(res: Response, json: object): void {
        return send_message_on_status(res, 451, json);
    }

    /**
     * Sends a "498 Invalid Token" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function invalid_token(res: Response, json: object): void {
        return send_message_on_status(res, 498, json);
    }

    // 5xx server error 

    /**
     * Sends a "500 Internal Server Error" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function internal_server_error(res: Response, json: object): void {
        return send_message_on_status(res, 500, json);
    }

    /**
     * Sends a "501 Not Implemented" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function not_implemented(res: Response, json: object): void {
        return send_message_on_status(res, 501, json);
    }

    /**
     * Sends a "502 Bad Gateway" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function bad_gateway(res: Response, json: object): void {
        return send_message_on_status(res, 502, json);
    }

    /**
     * Sends a "503 Service Unavailable" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function service_unavailable(res: Response, json: object): void {
        return send_message_on_status(res, 503, json);
    }

    /**
     * Sends a "504 Gateway Timeout" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function gateway_timeout(res: Response, json: object): void {
        return send_message_on_status(res, 504, json);
    }

    /**
     * Sends a "505 Http Version Not Supported" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function http_version_not_supported(res: Response, json: object): void {
        return send_message_on_status(res, 505, json);
    }

    /**
     * Sends a "506 Variant Also Negotiates" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function variant_also_negotiates(res: Response, json: object): void {
        return send_message_on_status(res, 506, json);
    }

    /**
     * Sends a "507 Insufficient Storage" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function insufficient_storage(res: Response, json: object): void {
        return send_message_on_status(res, 507, json);
    }

    /**
     * Sends a "508 Loop Detected" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function loop_detected(res: Response, json: object): void {
        return send_message_on_status(res, 508, json);
    }

    /**
     * Sends a "510 Not Extended" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function not_extended(res: Response, json: object): void {
        return send_message_on_status(res, 510, json);
    }

    /**
     * Sends a "511 Network Authentication Required" response.
     * @param res - The Express response object.
     * @param json - The JSON object to send.
     */
    export function network_authentication_required(res: Response, json: object): void {
        return send_message_on_status(res, 511, json);
    }
}

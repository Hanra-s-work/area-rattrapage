/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** test_speak_on_correct_status.ts
*/

import { describe, it, expect, beforeEach, jest } from '@jest/globals';

import { Response } from 'express';
import { SpeakOnCorrectStatus } from '../src/modules/speak_on_correct_status';

describe('SpeakOnCorrectStatus functions', () => {

    // Mock the Express Response object
    let mockRes: Partial<Response>;

    beforeEach(() => {
        // Clear previous mocks
        mockRes = {
            status: jest.fn().mockReturnThis() as jest.MockedFunction<(code: number) => Response>, // Type the mock properly
            json: jest.fn().mockReturnThis() as jest.MockedFunction<(body: object) => Response> // Type json mock
        };
    });

    it('should send a 200 response with the correct message', () => {
        const jsonResponse = { title: 'Test', msg: 'Success', token: '12345' };

        // Test the send_message_on_status function directly
        SpeakOnCorrectStatus.send_message_on_status(mockRes as Response, 200, jsonResponse);

        // Check that the response status is 200
        expect(mockRes.status).toHaveBeenCalledWith(200);

        // Check that json() was called with the expected response object
        expect(mockRes.json).toHaveBeenCalledWith(jsonResponse);
    });

    const testCases = [
        { functionName: "send_continue", status: 100, message: "Continue" },
        { functionName: "switching_protocols", status: 101, message: "Switching Protocols" },
        { functionName: "processing", status: 102, message: "Processing" },
        { functionName: "early_hints", status: 103, message: "Early Hints" },
        { functionName: "response_is_stale", status: 110, message: "Response is Stale" },
        { functionName: "success", status: 200, message: "OK" },
        { functionName: "created", status: 201, message: "Created" },
        { functionName: "accepted", status: 202, message: "Accepted" },
        { functionName: "non_authoritative_information", status: 203, message: "Non-Authoritative Information" },
        { functionName: "no_content", status: 204, message: "No Content" },
        { functionName: "reset_content", status: 205, message: "Reset Content" },
        { functionName: "partial_content", status: 206, message: "Partial Content" },
        { functionName: "multi_status", status: 207, message: "Multi-Status" },
        { functionName: "already_reported", status: 208, message: "Already Reported" },
        { functionName: "im_used", status: 226, message: "IM Used" },
        { functionName: "multiple_choices", status: 300, message: "Multiple Choices" },
        { functionName: "moved_permanently", status: 301, message: "Moved Permanently" },
        { functionName: "found", status: 302, message: "Found" },
        { functionName: "see_other", status: 303, message: "See Other" },
        { functionName: "not_modified", status: 304, message: "Not Modified" },
        { functionName: "use_proxy", status: 305, message: "Use Proxy" },
        { functionName: "switch_proxy", status: 306, message: "Switch Proxy" },
        { functionName: "temporary_redirect", status: 307, message: "Temporary Redirect" },
        { functionName: "permanent_redirect", status: 308, message: "Permanent Redirect" },
        { functionName: "bad_request", status: 400, message: "Bad Request" },
        { functionName: "unauthorized", status: 401, message: "Unauthorized" },
        { functionName: "payment_required", status: 402, message: "Payment Required" },
        { functionName: "forbidden", status: 403, message: "Forbidden" },
        { functionName: "not_found", status: 404, message: "Not Found" },
        { functionName: "method_not_allowed", status: 405, message: "Method Not Allowed" },
        { functionName: "not_acceptable", status: 406, message: "Not Acceptable" },
        { functionName: "proxy_authentication_required", status: 407, message: "Proxy Authentication Required" },
        { functionName: "request_timeout", status: 408, message: "Request Timeout" },
        { functionName: "conflict", status: 409, message: "Conflict" },
        { functionName: "gone", status: 410, message: "Gone" },
        { functionName: "length_required", status: 411, message: "Length Required" },
        { functionName: "precondition_failed", status: 412, message: "Precondition Failed" },
        { functionName: "payload_too_large", status: 413, message: "Payload Too Large" },
        { functionName: "uri_too_long", status: 414, message: "URI Too Long" },
        { functionName: "unsupported_media_type", status: 415, message: "Unsupported Media Type" },
        { functionName: "range_not_satisfiable", status: 416, message: "Range Not Satisfiable" },
        { functionName: "expectation_failed", status: 417, message: "Expectation Failed" },
        { functionName: "im_a_teapot", status: 418, message: "I'm a teapot" },
        { functionName: "misdirected_request", status: 421, message: "Misdirected Request" },
        { functionName: "unprocessable_entity", status: 422, message: "Unprocessable Entity" },
        { functionName: "locked", status: 423, message: "Locked" },
        { functionName: "failed_dependency", status: 424, message: "Failed Dependency" },
        { functionName: "too_early", status: 425, message: "Too Early" },
        { functionName: "upgrade_required", status: 426, message: "Upgrade Required" },
        { functionName: "precondition_required", status: 428, message: "Precondition Required" },
        { functionName: "too_many_requests", status: 429, message: "Too Many Requests" },
        { functionName: "request_header_fields_too_large", status: 431, message: "Request Header Fields Too Large" },
        { functionName: "unavailable_for_legal_reasons", status: 451, message: "Unavailable For Legal Reasons" },
        { functionName: "invalid_token", status: 498, message: "Invalid Token" },
        { functionName: "internal_server_error", status: 500, message: "Internal Server Error" },
        { functionName: "not_implemented", status: 501, message: "Not Implemented" },
        { functionName: "bad_gateway", status: 502, message: "Bad Gateway" },
        { functionName: "service_unavailable", status: 503, message: "Service Unavailable" },
        { functionName: "gateway_timeout", status: 504, message: "Gateway Timeout" },
        { functionName: "http_version_not_supported", status: 505, message: "HTTP Version Not Supported" },
        { functionName: "variant_also_negotiates", status: 506, message: "Variant Also Negotiates" },
        { functionName: "insufficient_storage", status: 507, message: "Insufficient Storage" },
        { functionName: "loop_detected", status: 508, message: "Loop Detected" },
        { functionName: "not_extended", status: 510, message: "Not Extended" },
        { functionName: "network_authentication_required", status: 511, message: "Network Authentication Required" }
    ];

    testCases.forEach(({ functionName, status, message }) => {
        it(`should send a ${status} response with the correct message`, () => {
            const jsonResponse = { title: "Test", msg: message, token: "12345" };

            // Call the respective function
            (SpeakOnCorrectStatus as Record<string, Function>)[functionName](mockRes as Response, jsonResponse);

            // Check the response status
            expect(mockRes.status).toHaveBeenCalledWith(status);

            // Check the JSON response
            expect(mockRes.json).toHaveBeenCalledWith(jsonResponse);
        });
    });

});

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

    it('should send a 100 response with the correct message', () => {
        const jsonResponse = { title: 'Test', msg: 'Continue', token: '12345' };

        // Test the send_continue function
        SpeakOnCorrectStatus.send_continue(mockRes as Response, jsonResponse);

        // Check that the response status is 100 (continue)
        expect(mockRes.status).toHaveBeenCalledWith(100);

        // Check that json() was called with the expected response object
        expect(mockRes.json).toHaveBeenCalledWith(jsonResponse);
    });

    it('should send a 101 response with the correct message', () => {
        const jsonResponse = { title: 'Test', msg: 'Switching Protocols', token: '12345' };

        // Test the switching_protocols function
        SpeakOnCorrectStatus.switching_protocols(mockRes as Response, jsonResponse);

        // Check that the response status is 101 (switching protocols)
        expect(mockRes.status).toHaveBeenCalledWith(101);

        // Check that json() was called with the expected response object
        expect(mockRes.json).toHaveBeenCalledWith(jsonResponse);
    });

});

/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** test_route_api.ts
*/

import request from 'supertest';
import { describe, it, expect } from '@jest/globals';
import app from '../src/index';

describe('GET /', () => {
    it('should return 200 and a welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        console.log(response.body);
        console.log(response.body.message);
        console.log(`type: body: ${typeof (response.body)}`);
        console.log(`type: body.message: ${typeof (response.body.message)}`);
        expect(response.body.message).toBe('Hello, World!');
    });
});

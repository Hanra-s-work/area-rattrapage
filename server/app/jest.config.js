/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** jest.config.js
*/

module.exports = {
    preset: 'ts-jest', // Use ts-jest preset
    testEnvironment: 'node', // Set the environment for testing
    transform: {
        '^.+\\.ts$': 'ts-jest', // Transform TypeScript files using ts-jest
    },
    testMatch: ['**/__tests__/**/*.ts'], // Specify where to find the test files
};

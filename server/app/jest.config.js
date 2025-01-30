/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** jest.config.js
*/

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', './src'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {
        '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }], // Explicitly use tsconfig.test.json
    },
    testMatch: ['**/__tests__/**/*.ts'],
};

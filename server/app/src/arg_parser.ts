/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** arg_parser.js
*/

/**
 * @file arg_parser.js
 * @brief File to parse the arguments passed to the app
 */

// Import minimist for argument parsing
const minimist = require('minimist');

// Use minimist to parse the arguments
const args = minimist(process.argv.slice(2));

console.log(args);  // Logs the parsed arguments to check if it works

export namespace Args {

    /**
     * Function to get the port from the arguments
     * @returns {string|null} the port value or null if not provided
     */
    export function get_port(): number {
        return args.port || null;  // Access the port via the argument name, e.g., --port=3000
    }

    /**
     * Function to get the IP from the arguments
     * @returns {string|null} the IP value or null if not provided
     */
    export function get_ip(): string {
        return args.ip || null;  // Access the IP via the argument name, e.g., --ip=192.168.1.1
    }

};

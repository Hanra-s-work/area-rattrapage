/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** sleep.js
*/

console.log("js/sleep initialising");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.sleep = sleep;
console.log("js/sleep initialised");

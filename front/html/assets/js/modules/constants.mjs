/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** constants.mjs
*/

// This is the file in charge of storing the constants that will be used throughout the client front-end

const widget_cookie_name = "widgets";
const user_username_cookie_name = "username";
const user_id_cookie_name = "user_id";
const user_token_cookie_name = "user_token";
const dashboard_page = "/dashboard";
const home_page = "/";

const constants = {
    home_page,
    dashboard_page,
    widget_cookie_name,
    user_id_cookie_name,
    user_token_cookie_name,
    user_username_cookie_name
};

export default constants;

window.constants = constants;

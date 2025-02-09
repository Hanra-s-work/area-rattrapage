/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** constants.mjs
*/

console.log("js/constants initialising");

// This is the file in charge of storing the constants that will be used throughout the client front-end

const widget_cookie_name = "widgets";
const user_username_cookie_name = "username";
const user_id_cookie_name = "user_id";
const user_token_cookie_name = "user_token";
const user_refresh_wigets_cookie_name = "refresh_widgets";

const home_page = "/";
const logout_page = "/logout";
const about_user = "/user/about";
const user_widgets = "/user/widgets";
const oauth_callback = "/oauth/callback";
const dashboard_page = "/dashboard";
const user_login_endpoint = "/login";
const user_passord = "/password";
const provide_missing_sso_info_endpoint = "/user/sso";

const widget_name_list_endpoint = "/widgets";
const widget_get_widget_content = "/widget";
const add_user_widget_endpoint = "/user/widget";
const widget_get_user_widgets_endpoint = "/user/widgets";
const widget_update_user_widget_endpoint = "/user/widget";
const user_refresh_wigets_endpoint = "/refresh";

const constants = {
    home_page,
    about_user,
    logout_page,
    user_passord,
    user_widgets,
    oauth_callback,
    dashboard_page,
    widget_cookie_name,
    user_id_cookie_name,
    user_login_endpoint,
    user_token_cookie_name,
    add_user_widget_endpoint,
    widget_get_widget_content,
    user_username_cookie_name,
    widget_name_list_endpoint,
    user_refresh_wigets_endpoint,
    user_refresh_wigets_cookie_name,
    widget_get_user_widgets_endpoint,
    provide_missing_sso_info_endpoint,
    widget_update_user_widget_endpoint,
};

export default constants;

window.constants = constants;

console.log("js/constants initialised");

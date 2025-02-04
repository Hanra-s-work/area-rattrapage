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
const widget_get_user_widgets_endpoint = "/user/widgets";


const user_widget_list = [
    {
        name: "sample_widget",
        content: "Hello world",
        position: 0
    },
    {
        name: "Clock",
        content: `<iframe src="https://timeday.co/clock?locale=en&timezone=Europe%2FBrussels&showDate=true&showTime=true&dateFormat=full&timeFormat=24h&showSeconds=true&showTimezone=false&fontSize=18&fontColor=%2523000000&fontWeight=normal&fontStyle=normal&fontDecoration=none&fontFamily=__className_9fd9c5&fontName=orbitron&borderShow=false&borderSize=1&borderStyle=solid&borderColor=%2523000000&borderRadius=rounded-md&backgroundColor=%2523ffffff&alignmentHorizontal=center&alignmentVertical=middle&paddingTop=4&paddingRight=4&paddingBottom=4&paddingLeft=4&width=400&height=40&styleType=standard" width="400" height="40" frameborder="0" style="border:none;"></iframe>`,
        position: 1
    },
    {
        name: "Picture",
        content: `<img src="https://picsum.photos/200"></img>`,
        position: 2
    },
    // {
    //     name: "Weather",
    //     content: `
    //         <script type="text/javascript">
    //             async function getCountryCoordinates(country) {
    //                 const url = \`https://nominatim.openstreetmap.org/search?q=\${encodeURIComponent(country)}&format=json&limit=1\`;
    //                 try {
    //                      const response = await fetch(url, {
    //                      headers: { 'User-Agent': 'YourAppName/1.0 (your@email.com)'}
    //                  });
    //                  if (!response.ok) { throw new Error(\`HTTP Error! Status: \${response.status}\`);}
    //                  const data = await response.json();
    //                  if (data.length === 0) { throw new Error(\`No results found for: \${country}\`); }
    //                  return { latitude: data[0].lat, longitude: data[0].lon };
    //                 } catch (error) {
    //                  console.error("Error fetching coordinates:", error.message);
    //                  return null;
    //                 }
    //              }

    //         async function getWeather(container, country) {
    //             const coords = await getCountryCoordinates(country);
    //             if (coords) {
    //                 const lat = coords.latitude;
    //                 const lon = coords.longitude;
    //                 const apiKey = "63adefcfe6e903d050ae3e0bb194af35"; // Replace with your actual API key
    //                 const weatherUrl = \`https://api.openweathermap.org/data/2.5/weather?lat=\${lat}&lon=\${lon}&mode=html&appid=\${apiKey}&units=metric&lang=en\`;

    //                 // Create and inject the iframe dynamically
    //                 const iframe = document.createElement("iframe");
    //                 iframe.src = weatherUrl;
    //                 iframe.width = "400";
    //                 iframe.height = "400";
    //                 iframe.frameBorder = "0";
    //                 iframe.scrolling = "no";

    //                 // Remove any previous iframes inside the container
    //                 container.innerHTML = "";
    //                 container.appendChild(iframe);
    //             } else {
    //                 console.log("Could not retrieve weather data.");
    //             }
    //         }

    //         // Automatically trigger the weather fetching for each dynamically injected div
    //         window.onload = function () {
    //             document.querySelectorAll(".weather-container").forEach((container) => {
    //                 const country = container.getAttribute("data-country") || "United Kingdom"; // Default country
    //                 getWeather(container, country);
    //             });
    //         };
    //     </script>

    //     <div class="weather-container" data-country="France"></div>
    //             `,
    //             position: 3
    //         }
];

const available_widgets = [
    {
        name: "sample_widget",
        content: "<p>Hello world</p>"
    },
    {
        name: "Clock",
        content: `<iframe src="https://timeday.co/clock?locale=en&timezone=Europe%2FBrussels&showDate=true&showTime=true&dateFormat=full&timeFormat=24h&showSeconds=true&showTimezone=false&fontSize=18&fontColor=%2523000000&fontWeight=normal&fontStyle=normal&fontDecoration=none&fontFamily=__className_9fd9c5&fontName=orbitron&borderShow=false&borderSize=1&borderStyle=solid&borderColor=%2523000000&borderRadius=rounded-md&backgroundColor=%2523ffffff&alignmentHorizontal=center&alignmentVertical=middle&paddingTop=4&paddingRight=4&paddingBottom=4&paddingLeft=4&width=400&height=40&styleType=standard" width="400" height="40" frameborder="0" style="border:none;"></iframe>`
    },
    {
        name: "Picture",
        content: `<img src="https://picsum.photos/200"></img>`
    },
    {
        name: "Weather",
        content: `<iframe src="https://www.meteo.be/services/widget/brussels" width="400" height="400" frameborder="0" scrolling="no"></iframe>`
    }
];

const raw_widgets_list = [
    "sample_widget",
    "Weather",
    "Clock",
    "Picture",
];

const constants = {
    home_page,
    about_user,
    logout_page,
    user_passord,
    user_widgets,
    oauth_callback,
    dashboard_page,
    user_widget_list,
    raw_widgets_list,
    available_widgets,
    widget_cookie_name,
    user_id_cookie_name,
    user_login_endpoint,
    user_token_cookie_name,
    user_username_cookie_name,
    widget_name_list_endpoint,
    widget_get_user_widgets_endpoint,
    provide_missing_sso_info_endpoint,
};

export default constants;

window.constants = constants;

console.log("js/constants initialised");

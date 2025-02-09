/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** font-selector.js
*/

const fonts = ["Arial", "Verdana", "Courier New", "Times New Roman", "Georgia"];
const fontCookieName = "font";

// Function to inject options into a dropdown based on an ID
function populateDropdown(dropdownId, options) {
    const dropdown = document.getElementById(dropdownId);
    if (!dropdown) {
        console.error(`Dropdown with ID '${dropdownId}' not found.`);
        return;
    }

    dropdown.innerHTML = "";
    options.forEach(option => {
        const optElement = document.createElement("option");
        optElement.value = option;
        optElement.textContent = option;
        dropdown.appendChild(optElement);
    });
}

// Function to set the font on page load based on a stored cookie
function initializeFont() {
    const fontCookie = window.cookie_manager.readCookie(fontCookieName);
    if (fontCookie) {
        const font = fontCookie;
        document.body.style.fontFamily = font;
        const dropdown = document.getElementById("fontSelector");
        if (dropdown) {
            dropdown.value = font;
        }
    } else {
        document.body.style.fontFamily = fonts[0];
        window.cookie_manager.createCookie(fontCookieName, fonts[0]);
        const dropdown = document.getElementById("fontSelector");
        if (dropdown) {
            dropdown.value = fonts[0];
        }
    }
}

// Function to update font when the dropdown changes and store it in a cookie
function updateFont(dropdown) {
    const selectedFont = dropdown.value.trim();
    document.body.style.fontFamily = selectedFont;
    window.cookie_manager.createCookie(fontCookieName, selectedFont, 365);
}



// Initialise when the page is loaded
function initialise() {
    populateDropdown("fontSelector", fonts);
    initializeFont();
}

document.addEventListener("DOMContentLoaded", initialise);


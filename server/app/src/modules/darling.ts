/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** darling.ts
*/

import DB from "./db";

export namespace Darling {

    export const character = [
        {
            name: "Zero Two",
            japanese_name: "ゼロツー",
            rōmaji: "Zero Tsū",
            alias: ["Partner Killer (パートナー殺し, Pātonā-Goroshi)", "Nine Iota (ナインイオタ, Nain Iota)", "Code:002"],
            age: 18,
            quote: "",
            description: "Zero Two is a human-klaxo sapien hybrid and an elite pilot with an infamous reputation as the \"Partner Killer\".",
            image: "",
            image_height: 168,
            image_width: 120,
            color: "#FF0000FF",
            height: "Around 170cm (5'7\")",
            weight: 48,
            bust: 74,
            more_info: "https://darling-in-the-franxx.fandom.com/wiki/Zero_Two"
        }
    ];
    export async function getDarling(widget_name: string, index: number, user_info: any, database: DB) {
        console.log("getDarling");
        return "<p>Darling</p>";
    }
}

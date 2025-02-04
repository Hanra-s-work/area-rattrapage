/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** login.ts
*/

import uuid4 from "uuid4";
import DB from "./db";
import bcryptjs from "bcryptjs";

export namespace Login {

    // bcrypt
    export const bcryptSaltRounds = 10;
    export const bcryptSalt = bcryptjs.genSaltSync(bcryptSaltRounds);

    export function generate_token() {
        return uuid4();
    };

    export async function log_user_in(user_email: string, database: DB) {
        const token = generate_token();
        const user_data = await database.getContentFromTable("users", ["id"], `email = '${user_email}'`);

        if (!user_data || user_data.length === 0) {
            return null;
        }

        const user_id = user_data[0].id;
        await database.updateTable("users", ["token"], [token], "id = ?", [user_id]);
        return token;
    };

    export async function log_user_out(token: string, database: DB) {
        const user_data = await database.getContentFromTable("users", ["id"], `token = '${token}'`);

        if (!user_data || user_data.length === 0) {
            return false;
        }

        const user_id = user_data[0].id;
        await database.updateTable("users", ["token"], [null], "id = ?", [user_id]);
        return true;
    };

    export async function check_token(token: string, database: DB) {
        const user_data = await database.getContentFromTable("users", ["id"], `token = '${token}'`);

        if (!user_data || user_data.length === 0) {
            return false;
        }

        return true;
    };

    export async function check_user_password(user_email: string, password: string, database: DB) {
        const user_data = await database.getContentFromTable("users", ["password"], `email = '${user_email}'`);

        if (!user_data || user_data.length === 0) {
            return false;
        }

        return bcryptjs.compareSync(password, user_data[0].password);
    };

    export async function hash_password(password: string) {
        return bcryptjs.hashSync(password, bcryptSalt);
    };

    export async function register_user(user_email: string, password: string, database: DB) {
        const user_data = await database.getContentFromTable("users", ["id"], `email = '${user_email}'`);

        if (user_data && user_data.length > 0) {
            return false;
        }

        const hashed_password = bcryptjs.hashSync(password, bcryptSalt);
        await database.writeToTable("users", ["email", "password"], [[user_email, hashed_password]]);
        return true;
    };

    export async function update_user_information(token: string, new_name: string, new_unhashed_password: string, database: DB) {
        console.log('update_user_information', token, new_name, new_unhashed_password);
        const user_data = await database.getContentFromTable("users", ["id"], `token = '${token}'`);

        console.log("user_data", user_data);

        if (!user_data || user_data.length === 0) {
            console.log("user data is empty");
            return false;
        }

        const password = bcryptjs.hashSync(new_unhashed_password, bcryptSalt);
        console.log("password", password);

        const user_id = Number(user_data[0].id);
        console.log("user_id", user_id);
        const hashed_password = bcryptjs.hashSync(password, bcryptSalt);
        console.log("hashed_password", hashed_password);
        await database.updateTable("users", ["name", "password"], [new_name, hashed_password], "id = ?", [user_id]);
        console.log("updated user information");
        return true;
    }
};

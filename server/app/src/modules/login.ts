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
        console.log("generate_token");
        return uuid4();
    };

    export async function log_user_in(user_email: string, database: DB) {
        console.log("log_user_in");
        const token = generate_token();
        const user_data = await database.getContentFromTable("users", ["id"], `email = '${user_email}'`);

        if (!user_data || user_data.length === 0) {
            return null;
        }

        const user_id = user_data[0].id;
        await database.updateTable("users", ["token"], [token], "id = ?", [user_id]);
        return token;
    };

    export async function log_local_user_in(user_email: string, unhashed_password: string, database: DB) {
        console.log("log_local_user_in");
        const token = generate_token();
        const user_data = await database.getContentFromTable("users", ["*"], `email = '${user_email}'`);

        if (!user_data || user_data.length === 0) {
            return null;
        }

        const user_id = user_data[0].id;
        const corresponds = await check_user_password(user_email, unhashed_password, database);
        if (!corresponds) {
            return null;
        }
        await database.updateTable("users", ["token"], [token], "id = ?", [user_id]);
        return token;
    };

    export async function log_user_out(token: string, database: DB) {
        console.log("log_user_out");
        const user_data = await database.getContentFromTable("users", ["id"], `token = '${token}'`);

        if (!user_data || user_data.length === 0) {
            return false;
        }

        const user_id = user_data[0].id;
        await database.updateTable("users", ["token"], [null], "id = ?", [user_id]);
        return true;
    };

    export async function check_token(token: string, database: DB) {
        console.log("check_token");
        const user_data = await database.getContentFromTable("users", ["id"], `token = '${token}'`);

        if (!user_data || user_data.length === 0) {
            return false;
        }

        return true;
    };

    export async function check_user_password(user_email: string, unhashed_password: string, database: DB) {
        console.log("check_user_password");
        const user_data = await database.getContentFromTable("users", ["password"], `email = '${user_email}'`);

        if (!user_data || user_data.length === 0) {
            return false;
        }

        return bcryptjs.compareSync(unhashed_password, user_data[0].password);
    };

    export async function hash_password(password: string) {
        console.log("hash_password");
        return bcryptjs.hashSync(password, bcryptSalt);
    };

    export async function register_user(username: string, user_email: string, password: string, database: DB) {
        console.log("register_user");
        const user_data = await database.getContentFromTable("users", ["id"], `email = '${user_email}'`);

        if (user_data && user_data.length > 0) {
            return false;
        }

        const hashed_password = await hash_password(password);
        console.log("hashed_password", hashed_password);
        await database.writeToTable("users", ["email", "password", "name"], [[user_email, hashed_password, username]]);
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

        const hashed_password = await hash_password(new_unhashed_password);

        const user_id = Number(user_data[0].id);
        console.log("user_id", user_id);
        console.log("hashed_password", hashed_password);
        await database.updateTable("users", ["name", "password"], [new_name, hashed_password], "id = ?", [user_id]);
        console.log("updated user information");
        return true;
    }
};

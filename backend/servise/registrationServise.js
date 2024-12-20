import bcrypt from "bcrypt";
import { findUser } from "./queryDB.js/selectUsers.js";
import { addUser } from "./queryDB.js/insertUser.js";
import { createToken } from "./tokenServise.js";

export async function registration(user) {
    console.log(user);

    const hashPassword = await bcrypt.hash(user.password, 5);
    user.password = hashPassword;
    const dataUser = await findUser(user);
    console.log("fff", dataUser);

    if (dataUser.length > 0) {
        return { msg: "User already exists" };
    } else {
        await addUser(user);
        const token = createToken(user.user_name, user.email);
        console.log("saddsad", token);
        return token;
    }
}
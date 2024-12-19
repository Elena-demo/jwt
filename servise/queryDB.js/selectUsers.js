import { connection } from "../../connectDB.js";

export async function findUser({ email }) {
    const userInfo = [email];
    console.log(userInfo);

    const sql = "select * from users where email = ?";

    // const [result] = await connection.query(sql, userInfo);
    // console.log(result);

    connection.query(sql, userInfo, async function(err, result) {
        if (err) {
            console.log("ERRORRR");
            console.log(err.sqlMessage);
            return err.sqlMessage;
        } else {
            console.log("kkkk", result);
            return result;
            //  throw new Error("Пользователеь с такими данными уже существует");
        }
    });
    // return result;
}
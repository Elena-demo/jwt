import { connection } from "../connectDB.js";

export function addUser({ user_name, email, password }) {
  const userData = [user_name, email, password];

  const sql =
    "insert into users (user_name, email, password) values (?, ?, ?);";
  connection.query(sql, userData, function (err, results) {
    if (err) {
      console.log(err);
      return err.message;
    } else {
      console.log("Данные добавлены");
      return results;
    }
  });
}

import { connection } from "../connectDB.js";

export async function findUser({ email }) {
  const userInfo = [email];
  console.log(userInfo);

  const sql = "select * from users where email = ?";

  // Wrap the query in a Promise
  return new Promise((resolve, reject) => {
    connection.query(sql, userInfo, function (err, result) {
      if (err) {
        console.log("ERRORRR");
        console.log(err.sqlMessage);
        reject(err.sqlMessage); // Reject with error message
      } else {
        console.log("kkkk", result);
        resolve(result); // Resolve with result
      }
    });
  });
}

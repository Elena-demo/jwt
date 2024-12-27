// import { connection } from "../connectDB.js";

// export const selectEmail = async (req, res) => {
//   const id = req.params.id;
//   connection.query(
//     "SELECT * FROM todolist where email = ?",
//     [id],
//     function (err, results) {
//       if (err) return res.json(err);
//       else {
//         console.log(results);
//         return res.json(results);
//       }
//     }
//   );
// };

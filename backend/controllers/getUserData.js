import { findUser } from "../queryDB.js/selectUsers.js";
import { authenticateToken } from "../servise/tokenServise.js";

export const getUserData = async (req, res) => {
  const secretKey = "EzPzLmnSqzy";

  const reqHeaders = req.headers["authorization"];
  const token = reqHeaders.split(" ")[1];
  console.log(token);

  const auth = await authenticateToken(token);
  console.log("itog", auth);
  const email = auth.email;

  const userData = await findUser({ email });
  console.log("to front", userData);
  return res.json(userData);
};

import jwt from "jsonwebtoken";

export function createToken(user_name, email) {
  const payload = {
    name: user_name,
    email: email,
  };

  console.log("tokennnnnnn", payload);

  const secretKey = "EzPzLmnSqzy";
  const options = {
    expiresIn: "10m",
  };

  const token = jwt.sign(payload, secretKey, options);
  // console.log("user!TOKEN", token);
  return token;
}

export async function authenticateToken(token) {
  const secretKey = "EzPzLmnSqzy";
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, auth) => {
      // if (err) return res.sendStatus(403);
      if (err) {
        console.log("error", err.message);
        reject(err.message);
      } else {
        console.log("22", auth);
        resolve(auth);
      }
    });
  });
}

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
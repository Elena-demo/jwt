import { registration } from "../servise/registrationServise.js";

export const userReg = async(req, res) => {
    const data = req.body;
    const user = {
        user_name: data.userName,
        email: data.email,
        password: data.password,
    };
    // const user = [data.user_name, data.email, data.password];

    const token = await registration(user);
    console.log("endpoit", token);

    return res.json(token);
};
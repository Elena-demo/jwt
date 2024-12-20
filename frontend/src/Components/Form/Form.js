import { useState } from "react";
import { postUserReg } from "../../fetch/postUserReg.js";
import { Button } from "../Button/Button";
import style from "./Form.module.css";

export function Form() {
    // const [user, setUser] = useState({
    //   userName: "",
    //   email: "",
    //   password: ""
    // });

    // setUser(...user, userName: 'Oleg') //?????????

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        if (userName && email && password) {
            const user = {
                userName,
                email,
                password,
            };
            start(user);
        } else {
            alert("Введите все данные");
        }
    };

    async function start(user) {
        const token = await postUserReg(user);

        if (typeof token === "string") {
            localStorage.setItem("token", JSON.stringify(token));
            setUserName("");
        } else {
            alert(token.msg);
            setEmail("");
        }
    }

    return ( <
        form onSubmit = {
            e => {
                e.preventDefault();
            }
        } >
        <
        h1 > Регистрация < /h1>{" "} <
        input className = { style.input }
        type = "text"
        value = { userName }
        placeholder = "user_name"
        onChange = { e => setUserName(e.target.value) }
        />{" "} <
        input className = { style.input }
        type = "text"
        value = { email }
        placeholder = "email"
        onChange = { e => setEmail(e.target.value) }
        />{" "} <
        input className = { style.input }
        type = "text"
        placeholder = "password"
        value = { password }
        onChange = { e => setPassword(e.target.value) }
        />{" "} <
        div >
        <
        Button text_btn = "Зарегистрироваться"
        click = { createUser }
        />{" "} <
        /div>{" "} <
        /form>
    );
}
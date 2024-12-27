import React, { useEffect, useState } from "react";
import { getInfoUser } from "../../fetch/getInfoUser";
// import style from "./PageUser.module.css";

function PageUser(props) {
    const [user, setUser] = useState({});
    // let user;

    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    useEffect(() => {
        async function infoUser() {
            const userInfo = await getInfoUser(token);
            setUser(userInfo[0]);
            // user = userInfo[0];  //Как правильно? Использовать State? Или обычную переменную
        }
        infoUser();
    }, []);

    return (
        // <div className={style.container}>
        <div>
            <h1> Личный кабинет {user.user_name} </h1>{" "}
        </div>
    );
}

export default PageUser;

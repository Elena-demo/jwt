export async function postUserReg(user) {
    console.log(user);

    let response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
    });

    let result = await response.json();
    console.log(result);
    return result;
}
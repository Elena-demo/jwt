export async function getInfoUser(token) {
    console.log(token);

    let response = await fetch("http://localhost:3000", {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${token}`,
        },
    });

    let result = await response.json();
    console.log(result);
    return result;
}

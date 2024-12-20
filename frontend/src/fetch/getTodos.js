export const getTodos = async() => {
    let res = await fetch("http://localhost:3000");
    let todos = await res.json();
    console.log(todos);
    return todos;
};
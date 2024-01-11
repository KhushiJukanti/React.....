import React, { useState } from "react";

function ToDo() {
    const [todos, setToDos] = useState([
        { id: 1, item: "learn react" },
        { id: 2, item: "learn js" }
    ]);
    const [users, setUsers] = useState([
        { name: "test1", email: "test1@gmail.com" },
        { name: "test2", email: "test2@gmail.com" },
        { name: "test3", email: "test3@gmail.com" }
    ]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // const addTodo = () => {
    //     setToDos([...todos, { item: item }]);
    //     setItem(""); // Clear the input text
    // };

    const addTodo = () => {
        setUsers([...users, { name: name, email: email }]);
        setName(""); // Clear the input text
        setEmail(""); // Clear the email input text
    };

    const deleteTodo = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
    };

    // const todoItemChange = (e) => setItem(e.target.value);
    const todoNameChange = (e) => setName(e.target.value);
    const todoEmailChange = (e) => setEmail(e.target.value);

    return (
        <div>
            <h1>Hello Todo app</h1>

             {/* <ul>
                {todos.map((el) => (
                    <div key={el.id}>
                        <li>{el.item}</li>
                    </div>
                ))}
            </ul> */}


            <ul>
                {users.map((user, index) => (
                    <div key={index}>
                        <li>
                            {user.email}, {user.name}
                            <button onClick={() => deleteTodo(index)}>Delete</button>
                        </li>
                    </div>
                ))}
            </ul>
            <input
                type="text"
                value={name}
                name="todo"
                placeholder="Enter todo Name"
                onChange={(e) => todoNameChange(e)}
            ></input>
            <input
                type="text"
                value={email}
                name="email"
                placeholder="Enter email"
                onChange={(e) => todoEmailChange(e)}
            ></input>
            <button onClick={() => addTodo()}>Add Todo</button>
        </div>
    );
}

export default ToDo;

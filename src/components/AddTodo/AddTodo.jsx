import { useState } from "react";

function AddTodo({ addTodos }) {
    const [todoText, setTodoText] = useState('');

    return (
        <>
            <input
                placeholder="Add Your Next Todo"
                onChange={(e) => setTodoText(e.target.value)}
                value={todoText}
            />
            <button onClick={() => {
                addTodos(todoText);
                setTodoText("");
            }}>Submit</button>
        </>
    )
}
export default AddTodo;
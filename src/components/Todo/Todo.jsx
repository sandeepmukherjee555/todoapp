import { useState } from "react";

function Todo({ finishTodo, editTodo, deleteTodo, text, isFinished, id }) {
    const [isEditing, setIdEditing] = useState(false);
    const [todoText, setTodoText] = useState(text);

    return (
        <div>
            <input type="checkbox" checked={isFinished} onChange={() => finishTodo(!isFinished)} />
            {isEditing ? <input value={todoText} onChange={(e) => setTodoText(e.target.value)} /> : <span>{todoText}</span>}
            <button onClick={() => {
                setIdEditing(!isEditing);
                editTodo(todoText);
            }}>{isEditing ? "SAVE" : "EDIT"}</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default Todo;
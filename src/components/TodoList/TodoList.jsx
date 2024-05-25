import Todo from "../Todo/Todo";

function TodoList({ todos, setTodos }) {

    function onDeleteTodo(id) {
        const newTodolist = todos.filter(todo => todo.id != id);
        setTodos(newTodolist);
    }
    return (
        todos &&
        todos.map((todo) =>
            <Todo
                key={todo.id}
                text={todo.text}
                isFinished={todo.isFinished}
                deleteTodo={() => onDeleteTodo(todo.id)}
            />)
    )
}

export default TodoList;
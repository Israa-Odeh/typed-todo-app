import { GrAddCircle } from "react-icons/gr";
import { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import { TodoList } from "./components";
import "./TodoKeeper.css";

const TodoKeeper = () => {
  const [newTodoDescription, setNewTodoDescription] = useState<string>("");
  const { todos, addTodo, toggleCompletion, deleteTodo } = useTodos();

  const handleAddTodo = () => {
    addTodo(newTodoDescription);
    setNewTodoDescription("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoDescription(e.target.value);
  };

  return (
    <div className="todo-keeper">
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          toggleCompletion={toggleCompletion}
          deleteTodo={deleteTodo}
        />
      ) : (
        <div className="todo-keeper__empty-message">
          <p>No Todos yet. Add a new todo to get started!</p>
        </div>
      )}
      <div className="todo-keeper__input-wrapper">
        <input
          type="text"
          className="todo-keeper__input"
          value={newTodoDescription}
          onChange={handleInputChange}
          placeholder="Add a new Todo"
        />
        <button className="todo-keeper__add-button" onClick={handleAddTodo}>
          <GrAddCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default TodoKeeper;

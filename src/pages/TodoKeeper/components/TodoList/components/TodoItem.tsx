import { MdDelete } from "react-icons/md";
import { Todo } from "src/pages/TodoKeeper/type";
import "./TodoItem.css";

type TodoItemProps = {
  todo: Todo;
  toggleCompletion: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem = ({ todo, toggleCompletion, deleteTodo }: TodoItemProps) => {
  const handleCheckboxChange = () => {
    toggleCompletion(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-item">
      <div className="todo-item__content">
        <input
          className="todo-item__checkbox"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={handleCheckboxChange}
        />
        <p
          className="todo-item__description"
          style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        >
          {todo.description}
        </p>
      </div>
      <button
        className="todo-item__delete-button"
        type="button"
        onClick={handleDelete}
      >
        <MdDelete size={24} />
      </button>
    </div>
  );
};

export default TodoItem;

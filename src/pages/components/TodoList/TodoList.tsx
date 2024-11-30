import { Todo } from "src/types";
import TodoItem from "./components";
import "./TodoList.css";

type TodoListProps = {
  todos: Todo[];
  toggleCompletion: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoList = ({ todos, toggleCompletion, deleteTodo }: TodoListProps) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompletion={toggleCompletion}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;

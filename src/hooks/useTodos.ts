import {
  getTodosFromLocalStorage,
  saveTodosToLocalStorage,
} from "src/utils/localStorage";
import { useState, useEffect } from "react";
import { Todo } from "src/types";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => getTodosFromLocalStorage());

  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  const addTodo = (description: string) => {
    if (description.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      description: description,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleCompletion = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, toggleCompletion, deleteTodo };
}

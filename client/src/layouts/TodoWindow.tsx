import { useEffect, useState } from "react";
import { AddTodoButton } from "../components/AddTodoButton";
import { TodoList } from "../components/TodoList";
import { Todo } from "../globals/types";

export const TodoWindow = () => {
  const [todos, setTodos] = useState<Todo[]>([{
    message: "",
    completed: false,
    time_updated: new Date(0),
    time_created: new Date(0)
  }])
  useEffect(() => {
    const getTodos = async () => {
      const response: Response = await fetch('http://127.0.0.1:8000/api/todo/');
      const todoData: Todo[] = await response.json();
      setTodos(todoData);
    }
    getTodos();
  }, []);
  return (
    <>
      <div className="flex flex-col bg-black bg-opacity-40 rounded-3xl p-7 w-full h-5/6 justify-between">
        <div className="text-right">
          <span className="font-main text-white text-2xl drop-shadow-lg mb-5">
            {todos.length} tasks left
          </span>
          <TodoList todos={todos} />
        </div>
        <div className="mr-0 ml-auto">
          <AddTodoButton />
        </div>
      </div>
    </>
  );
};

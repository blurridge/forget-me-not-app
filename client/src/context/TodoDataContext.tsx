import { createContext, useState, useContext, useEffect, Dispatch, SetStateAction, ReactNode } from "react";
import { Todo } from "../globals/types";

interface ITodoDataContext {
  todos: Todo[]
  setTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoDataContext = createContext<Partial<ITodoDataContext>>({});

export const TodoDataContextProvider = ({ children }: {children: ReactNode}) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      message: "",
      completed: false,
      time_updated: new Date(0),
      time_created: new Date(0),
    },
  ]);
  useEffect(() => {
    const getTodos = async () => {
      const response: Response = await fetch("http://127.0.0.1:8000/api/todo/");
      const todoData: Todo[] = await response.json();
      setTodos(todoData);
    };
    getTodos();
  }, []);

  return (
    <TodoDataContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoDataContext.Provider>
  );
};

export const TodoData = () => {
  return useContext(TodoDataContext);
};

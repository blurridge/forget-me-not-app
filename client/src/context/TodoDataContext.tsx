import {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useReducer,
} from "react";
import { reducer, initialState, ACTIONS, CompletedAction } from "./reducer";
import { Todo } from "../globals/types";

const TodoDataContext = createContext<{
  todos: Todo[];
  dispatch: React.Dispatch<CompletedAction>;
}>({
  todos: initialState,
  dispatch: () => null,
});

export const TodoDataContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const getTodos = async () => {
      const response: Response = await fetch("http://127.0.0.1:8000/api/todo/");
      const todoData: Todo[] = await response.json();
      dispatch({ type: ACTIONS.GET_TODOS, payload: { initialTodo: todoData } });
    };
    getTodos();
  }, []);

  return (
    <TodoDataContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoDataContext.Provider>
  );
};

export const TodoData = () => {
  return useContext(TodoDataContext);
};

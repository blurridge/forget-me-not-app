import { Todo } from "../globals/types";

export enum ACTIONS {
  SET_COMPLETED = "set-completed",
  GET_TODOS = "get-todos",
}

export const initialState: Todo[] = [
  {
    id: 0,
    message: "",
    completed: false,
    time_updated: new Date(0),
    time_created: new Date(0),
  },
];

export interface CompletedAction {
  type: ACTIONS;
  payload: {
    id?: number;
    initialTodo?: Todo[];
  };
}

export const reducer = (todos: Todo[], action: CompletedAction): Todo[] => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.SET_COMPLETED:
      return todos.map((todo: Todo) => {
        if (todo.id === payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.GET_TODOS:
        if(payload.initialTodo)
            return payload.initialTodo;
        return [];
    default:
      return todos;
  }
};

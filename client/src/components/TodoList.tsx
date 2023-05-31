import { ITodoProps, Todo } from "../globals/types";
import { TodoRow } from "./TodoRow";
import { AddingState } from "../context/AddingStateContext";
import { initialState } from "../context/reducer";

export const TodoList = ({ todos }: ITodoProps) => {
  const { addingState } = AddingState();
  return (
    <>
      <div className="flex flex-col justify-start w-full h-full">
        {todos.map((todo: Todo) => (
          <TodoRow key={todo.id} todo={todo} />
        ))}
        {addingState && <TodoRow key={Date.now()} todo={initialState[0]} />}
      </div>
    </>
  );
};

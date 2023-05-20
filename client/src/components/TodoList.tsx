import { ITodoProps, Todo } from "../globals/types";
import { TodoRow } from "./TodoRow";

export const TodoList = ({ todos }: ITodoProps) => {
  return (
    <>
      {todos.map((todo: Todo, index: number) => (
        <TodoRow key={index} todo={todo} />
      ))}
    </>
  );
};

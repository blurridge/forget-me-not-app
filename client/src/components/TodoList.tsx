import { ITodoProps, Todo } from "../globals/types";
import { TodoRow } from "./TodoRow";

export const TodoList = ({ todos }: ITodoProps) => {
  return (
    <>
      <div className="flex flex-col justify-start w-full h-full">
        {todos.map((todo: Todo, index: number) => (
          <TodoRow key={index} todo={todo} />
        ))}
      </div>
    </>
  );
};

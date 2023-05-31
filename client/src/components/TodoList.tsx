import { ITodoProps, Todo } from "../globals/types";
import { TodoRow } from "./TodoRow";

export const TodoList = ({ todos }: ITodoProps) => {
  return (
    <>
      <div className="flex flex-col justify-start w-full h-full">
        {todos.map((todo: Todo) => (
          <TodoRow key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
};

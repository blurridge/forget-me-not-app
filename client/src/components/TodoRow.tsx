import { Todo } from "../globals/types";
interface ITodoProp {
  todo: Todo;
}

export const TodoRow = ({ todo }: ITodoProp) => {
  return (
    <div className="text-white font-main text-2xl drop-shadow-lg my-4">
      {todo.message}
    </div>
  );
};

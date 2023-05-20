import { ITodoProp } from "../globals/types";

export const TodoRow = ({ todo }: ITodoProp) => {
  console.log(todo);
  return <div className="text-white font-main">{todo.message}</div>;
};

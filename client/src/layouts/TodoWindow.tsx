import { AddTodoButton } from "../components/AddTodoButton";
import { TodoList } from "../components/TodoList";
import { Todo } from "../globals/types";

const todos: Todo[] = [
  {
    message: "Practice React with TypeScript",
    completed: false,
    time_updated: new Date("2023-05-19"),
    time_created: new Date("2023-05-19"),
  },
  {
    message: "Dance Cupid",
    completed: false,
    time_updated: new Date("2023-04-25"),
    time_created: new Date("2023-04-19"),
  },
  {
    message: "Do homework",
    completed: false,
    time_updated: new Date("2023-05-20"),
    time_created: new Date("2023-05-19"),
  },
];

export const TodoWindow = () => {
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

import { useEffect } from "react";
import { TodoList } from "../components/TodoList";
import { Todo } from "../globals/types";
import { Ripple, initTE } from "tw-elements";

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
  useEffect(() => {
    initTE({ Ripple });
  }, []);
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
          <button
            className="bg-lavender rounded-full px-10 py-8 text-white drop-shadow-2xl"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

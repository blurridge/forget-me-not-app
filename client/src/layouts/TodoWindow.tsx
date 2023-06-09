import { useState, useEffect } from "react";
import { AddTodoButton } from "../components/AddTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoData } from "../context/TodoDataContext";
import { Animate, initTE } from "tw-elements";
import { AddingState } from "../context/AddingStateContext";

export const TodoWindow = () => {
  const { todos } = TodoData();
  const { addingState } = AddingState();
  const [tasksLeft, setTasksLeft] = useState<number>(0);
  useEffect(() => {
    initTE({ Animate });
  }, []);
  useEffect(() => {
    if (todos) {
      setTasksLeft(todos.filter((todo) => !todo.completed).length);
    }
  }, [todos]);

  return (
    <>
      <div
        data-te-animation-init
        data-te-animation-start="onLoad"
        data-te-animation-reset="true"
        data-te-animation="[fade-in_1s_ease-in-out]"
        className=" bg-black bg-opacity-40 rounded-3xl p-7 w-full h-5/6"
      >
        <div
          data-te-animation-init
          data-te-animation-start="onLoad"
          data-te-animation-reset="true"
          data-te-animation="[fade-in_2s_ease-in-out]"
          className="flex flex-col w-full h-full justify-between"
        >
          <div className="text-right">
            <span className="font-main text-white text-2xl drop-shadow-lg mb-5">
              {tasksLeft} tasks left
            </span>
          </div>
          {todos.length !== 0 || addingState ? (
            <TodoList todos={todos} />
          ) : (
            <div className="flex flex-col h-full w-full justify-center items-center">
              <span className="font-main text-white text-2xl drop-shadow-lg mb-5">
                Nothing forgotten.
              </span>
            </div>
          )}
          <div className="mr-0 ml-auto">
            <AddTodoButton />
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import { TodoList } from "../components/TodoList";

export const TodoWindow = () => {
  return (
    <>
      <div className="flex flex-col ">
        <TodoList />
      </div>
    </>
  );
};

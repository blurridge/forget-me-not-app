import React from "react";
import { TodoWindow } from "../layouts/TodoWindow";
import { DateInfo } from "../components/DateInfo";

export const TodoPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-purple-gradient bg-cover h-screen">
        <DateInfo />
        <TodoWindow />
      </div>
    </>
  );
};

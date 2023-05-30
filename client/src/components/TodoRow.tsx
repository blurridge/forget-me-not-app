import { useEffect, useState } from "react";
import { Todo } from "../globals/types";
import { TodoData } from "../context/TodoDataContext";
import { ACTIONS } from "../context/reducer";
import { sleep } from "../globals/functions";
interface ITodoProp {
  todo: Todo;
}

export const TodoRow = ({ todo }: ITodoProp) => {
  const { dispatch } = TodoData();
  const handleClick = async () => {
    dispatch({ type: ACTIONS.SET_COMPLETED, payload: { id: todo.id } });
  };
  const sendUpdatesToContext = (
    e:
      | React.FocusEvent<HTMLDivElement, Element>
      | React.KeyboardEvent<HTMLDivElement>
  ) => {
    const isoDateString = new Date().toISOString();
    if (e.currentTarget.textContent !== todo.message) {
      dispatch({
        type: ACTIONS.EDIT_TODO,
        payload: {
          id: todo.id,
          newMessage: e.currentTarget.textContent || "",
          updatedDate: new Date(isoDateString),
        },
      });
    }
  };
  useEffect(() => {
    const deleteEmptyMessages = () => {
      if (todo.message === "") {
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
      }
    };
    deleteEmptyMessages();
  }, [todo.message]);
  useEffect(() => {
    const deleteCompletedTodo = async () => {
      if (todo.completed) {
        await sleep(2000);
        console.log("TODO DELETING!");
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
      }
    };
    deleteCompletedTodo();
  }, [todo.completed]);
  return (
    <>
      <div className="flex gap-3">
        <div className="flex flex-col justify-center">
          <button
            className={`${
              todo.completed ? "shaded-circle" : "unshaded-circle"
            } drop-shadow-lg`}
            onClick={handleClick}
          ></button>
        </div>
        <div className="text-white font-main text-2xl drop-shadow-lg my-4 w-11/12 text-justify pointer-events-none">
          <div className="inline-block max-w-full">
            {todo.completed ? (
              <div
                className="break-words pointer-events-auto min-w-[20px]"
                style={{ textDecoration: "line-through", outline: "none" }}
              >
                {todo.message}
              </div>
            ) : (
              <div
                className="break-words pointer-events-auto min-w-[20px]"
                contentEditable="true"
                suppressContentEditableWarning={true}
                dir="ltr"
                style={{ outline: "none" }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    sendUpdatesToContext(e);
                  }
                }}
                onBlur={(e) => {
                  e.preventDefault();
                  sendUpdatesToContext(e);
                }}
              >
                {todo.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

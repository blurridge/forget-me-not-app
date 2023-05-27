import { useState } from "react";
import { Todo } from "../globals/types";
import { TodoData } from "../context/TodoDataContext";
import { ACTIONS } from "../context/reducer";
interface ITodoProp {
  todo: Todo;
}

export const TodoRow = ({ todo }: ITodoProp) => {
  const { dispatch } = TodoData();
  const [taskDone, setTaskDone] = useState<boolean>(todo.completed);
  const handleClick = () => {
    if (taskDone) {
      setTaskDone(false);
    } else {
      setTaskDone(true);
    }
    dispatch({ type: ACTIONS.SET_COMPLETED, payload: { id: todo.id } });
  };
  return (
    <>
      <div className="flex gap-3">
        <div className="flex flex-col justify-center">
          {taskDone ? (
            <button
              className="shaded-circle drop-shadow-lg"
              onClick={handleClick}
            ></button>
          ) : (
            <button
              className="unshaded-circle drop-shadow-lg"
              onClick={handleClick}
            ></button>
          )}
        </div>
        <div className="text-white font-main text-2xl drop-shadow-lg my-4">
          {taskDone ? (
            <span style={{ textDecoration: "line-through" }}>
              {todo.message}
            </span>
          ) : (
            <span
              contentEditable="true"
              suppressContentEditableWarning={true}
              dir="ltr"
              onKeyDown={(e) => {
                const isoDateString = new Date().toISOString();
                if (e.key === "Enter") {
                  e.preventDefault();
                  dispatch({
                    type: ACTIONS.EDIT_TODO,
                    payload: {
                      id: todo.id,
                      newMessage: e.currentTarget.textContent || "",
                      updatedDate: new Date(isoDateString),
                    },
                  });
                }
              }}
            >
              {todo.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

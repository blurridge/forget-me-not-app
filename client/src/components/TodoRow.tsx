import { useEffect, useRef } from "react";
import { Todo } from "../globals/types";
import { TodoData } from "../context/TodoDataContext";
import { ACTIONS } from "../context/reducer";
import { sleep, getCurrentISODate } from "../globals/functions";
import { AddingState } from "../context/AddingStateContext";
interface ITodoProp {
  todo: Todo;
}

export const TodoRow = ({ todo }: ITodoProp) => {
  let createdTodo: Todo;
  const { dispatch } = TodoData();
  const { addingState, setAddingState } = AddingState();
  const inputRef = useRef<any>(null);
  const markComplete = () => {
    dispatch({ type: ACTIONS.SET_COMPLETED, payload: { id: todo.id } });
  };
  const sendUpdatesToContext = (
    e:
      | React.FocusEvent<HTMLDivElement, Element>
      | React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (e.currentTarget.textContent !== todo.message) {
      dispatch({
        type: ACTIONS.EDIT_TODO,
        payload: {
          id: todo.id,
          newMessage: e.currentTarget.textContent || "",
          updatedDate: getCurrentISODate(),
        },
      });
    }
  };
  const createTodo = (divMessage: string) => {
    if (divMessage !== "") {
      const timeNow = getCurrentISODate();
      createdTodo = {
        id: Date.now(),
        message: divMessage,
        completed: false,
        time_updated: timeNow,
        time_created: timeNow,
      };
      dispatch({ type: ACTIONS.ADD_TODO, payload: { newTodo: createdTodo } });
      sendUpdatesToBackend("CREATE");
    }
  };
  const sendUpdatesToBackend = async (choice: string) => {
    switch (choice) {
      case "EDIT":
        try {
          await fetch(`/api/todo/${todo.id}/edit`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
          });
        } catch (error) {
          console.error("Error updating todo:", error);
        }
        break;
      case "DELETE":
        try {
          await fetch(`/api/todo/${todo.id}/delete`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (error) {
          console.error("Error deleting todo:", error);
        }
        break;
      case "CREATE":
        try {
          await fetch(`/api/todo/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(createdTodo),
          });
        } catch (error) {
          console.error("Error creating todo:", error);
        }
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    if (addingState && todo.id === 0) {
      inputRef.current.focus();
    }
  }, [inputRef]);
  useEffect(() => {
    const deleteEmptyMessages = () => {
      if (todo.message === "" && addingState === false) {
        sendUpdatesToBackend("DELETE");
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
      } else {
        sendUpdatesToBackend("EDIT");
      }
    };
    if (todo.id !== 0) {
      deleteEmptyMessages();
    }
  }, [todo.message]);
  useEffect(() => {
    const deleteCompletedTodo = async () => {
      if (todo.completed) {
        await sleep(2000);
        sendUpdatesToBackend("DELETE");
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
      } else {
        sendUpdatesToBackend("EDIT");
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
            onClick={markComplete}
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
                    if (todo.id !== 0) {
                      sendUpdatesToContext(e);
                    }
                    if (
                      addingState &&
                      todo.id === 0 &&
                      e.currentTarget.textContent !== ""
                    ) {
                      createTodo(e.currentTarget.textContent as string);
                      setAddingState(!addingState);
                    } else if (addingState) {
                      setAddingState(!addingState);
                    }
                  }
                }}
                onBlur={(e) => {
                  e.preventDefault();
                  if (todo.id !== 0) {
                    sendUpdatesToContext(e);
                  }
                  if (
                    addingState &&
                    todo.id === 0 &&
                    e.currentTarget.textContent !== ""
                  ) {
                    createTodo(e.currentTarget.textContent as string);
                    setAddingState(!addingState);
                  } else if (addingState) {
                    setAddingState(!addingState);
                  }
                }}
                ref={inputRef}
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

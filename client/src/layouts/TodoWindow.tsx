import { AddTodoButton } from "../components/AddTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoData } from "../context/TodoDataContext";

export const TodoWindow = () => {
  const { todos } = TodoData();
  return (
    <>
      <div className="flex flex-col bg-black bg-opacity-40 rounded-3xl p-7 w-full h-5/6 justify-between">
        <div className="text-right">
          <span className="font-main text-white text-2xl drop-shadow-lg mb-5">
            {todos?.length} tasks left
          </span>
          {todos !== undefined ? (
            <TodoList todos={todos} />
          ) : (
            <span className="font-main text-white text-2xl drop-shadow-lg mb-5">
              Nothing forgotten.
            </span>
          )}
        </div>
        <div className="mr-0 ml-auto">
          <AddTodoButton />
        </div>
      </div>
    </>
  );
};

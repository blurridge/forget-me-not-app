import { TodoList } from "../components/TodoList";

export const TodoWindow = () => {
  return (
    <>
      <div className="flex flex-col bg-black opacity-40 rounded-3xl p-5 w-full h-5/6">
        <TodoList />
      </div>
    </>
  );
};

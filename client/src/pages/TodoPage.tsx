import { TodoWindow } from "../layouts/TodoWindow";
import { DateInfo } from "../components/DateInfo";

export const TodoPage = () => {
  return (
    <>
      <div className="bg-purple-gradient bg-cover h-screen">
        <div className="flex flex-col items-center justify-center h-screen w-3/6 m-auto gap-4">
          <DateInfo />
          <TodoWindow />
        </div>
      </div>
    </>
  );
};

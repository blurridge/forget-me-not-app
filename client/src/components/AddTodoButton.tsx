import { useEffect } from "react";
import { Ripple, initTE } from "tw-elements";

export const AddTodoButton = () => {
  useEffect(() => {
    initTE({ Ripple });
  }, []);
  return (
    <>
      <button
        className="bg-lavender rounded-full px-10 py-8 text-white drop-shadow-2xl"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        +
      </button>
    </>
  );
};

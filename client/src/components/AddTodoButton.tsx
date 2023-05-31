import { useEffect } from "react";
import { Ripple, initTE } from "tw-elements";
import { AddingState } from "../context/AddingStateContext";

export const AddTodoButton = () => {
  const { addingState, setAddingState } = AddingState();
  const updateAddingState = () => {
    setAddingState(!addingState);
  };
  useEffect(() => {
    initTE({ Ripple });
  }, []);
  return (
    <>
      <button
        className="bg-lavender rounded-full px-10 py-8 text-white drop-shadow-2xl"
        data-te-ripple-init
        data-te-ripple-color="light"
        onClick={updateAddingState}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-4 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </>
  );
};

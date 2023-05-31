import { createContext, useContext, ReactNode, useState } from "react";

interface IAddingStateContext {
  addingState: boolean;
  setAddingState: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddingStateContext = createContext<IAddingStateContext>({
  addingState: false,
  setAddingState: () => undefined,
});

export const AddingStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [addingState, setAddingState] = useState<boolean>(false);

  return (
    <AddingStateContext.Provider value={{ addingState, setAddingState }}>
      {children}
    </AddingStateContext.Provider>
  );
};

export const AddingState = () => {
  return useContext(AddingStateContext);
};

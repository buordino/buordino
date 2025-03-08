import { useContext } from "react";
import { globalContext } from "./ContextProvider";

export const useGlobalContext = () => {
  const context = useContext(globalContext);
  if (context === undefined)
    console.log("You must use the context inside the provider");
  return context;
};

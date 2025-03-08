import { createContext, ReactNode, useState } from "react";

export interface ContextType {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const globalContext = createContext<ContextType | null>(null);

interface ContextProviderPropsType {
  children: ReactNode;
}

export default function ContextProvider({
  children,
}: ContextProviderPropsType) {
  const [isShow, setIsShow] = useState(false);
  return (
    <globalContext.Provider value={{ isShow, setIsShow }}>
      {children}
    </globalContext.Provider>
  );
}

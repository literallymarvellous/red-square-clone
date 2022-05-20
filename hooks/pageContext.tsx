import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface PageContextInterface {
  backdrop: boolean;
  setBackdrop: Dispatch<SetStateAction<boolean>>;
}

export const PageContext = createContext<PageContextInterface | null>(null);

export const PageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [backdrop, setBackdrop] = useState(false);

  return (
    <PageContext.Provider value={{ backdrop, setBackdrop }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context as PageContextInterface;
};

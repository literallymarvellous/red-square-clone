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
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  toggleModal: VoidFunction;
}

export const PageContext = createContext<PageContextInterface | null>(null);

export const PageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [backdrop, setBackdrop] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    const body = document.querySelector("body") as HTMLBodyElement;
    body.classList.toggle("modal-open");
  };

  return (
    <PageContext.Provider
      value={{ backdrop, setBackdrop, modal, setModal, toggleModal }}
    >
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

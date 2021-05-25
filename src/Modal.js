import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

let modalRoot;

const Modal = ({ children }) => {
  modalRoot = modalRoot ? modalRoot : document.getElementById("modal");

  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    //  insert into DOM when created
    modalRoot.appendChild(elRef.current);
    //  remove from DOM when done
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

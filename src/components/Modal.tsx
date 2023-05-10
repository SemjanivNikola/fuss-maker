import { ReactNode } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactNode }) => {
    return createPortal(<div className="modal-wrapper">{children}</div>, document.querySelector("#modal") as Element);
};

export default Modal;

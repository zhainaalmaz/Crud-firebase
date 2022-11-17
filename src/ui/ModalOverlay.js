import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { Modal } from "./Modal";

export const ModalOverlay = ({ todo, onConfirm }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal todo={todo} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

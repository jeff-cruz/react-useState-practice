import React, { useState } from "react";
import "./Modal.css";

const Modal = (props) => {
  const [displayModal, setDisplayModal] = useState(true);

  const closeModal = () => {
    setDisplayModal(false);
    props.close();
  };

  const modalClass = displayModal === false
    ? "close"
    : "open";

  return (
    <div className={modalClass}>
      <div className="modal-container" onClick={closeModal}/>
        <div className="modal__box">
          <div className="modal__title">
            <h2>Invalid Input</h2>
          </div>
          <div className="modal__description">
            <span>{props.message}</span>
          </div>
          <button type="button" onClick={closeModal} className="modal__button">
            Okay
          </button>
        </div>
    </div>
  );
};

export default Modal;

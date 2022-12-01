import React, { useState } from "react";
import "./Modal.css";

const Modal = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = (event) => {
    setOpenModal(false);
  };

  const modalClass = openModal === false
    ? "modal close"
    : "modal open";

  return (
    <>
      <div className={modalClass} />
      <div className="modal__box">
        <div className="modal__title">
          <h2>Invalid Input</h2>
        </div>
        <div className="modal__description">
          <span>Please enter valid name and age (non-empty values).</span>
        </div>
        <button onClick={closeModal} className="modal__button">
          Okay
        </button>
      </div>
    </>
  );
};

export default Modal;

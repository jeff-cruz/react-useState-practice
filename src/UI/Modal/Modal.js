import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <>
      <div className="modal" />
        <div className="modal__box">
          <div className="modal__title">
            <h2>Invalid Input</h2>
          </div>
          <div className="modal__description">
            <span>Please enter valid name and age (non-empty values).</span>
          </div>
          <button className="modal__button">Okay</button>
        </div>
    </>
  );
};

export default Modal;

import React from "react";
import { Modal } from "react-bootstrap";
import "./ConfirmModal.css";
import Button from "../../Button/Button";

const ConfirmModal = ({ show, handleClose, role, id, confirmFor, action }) => {
  const getTextConfirm = () => {
    switch (confirmFor) {
      case "add":
        return "New product will be added";
      case "edit":
        return `${role} data wiil change`;
      case "delete":
        return `${role} with code ${id} will be deleted`;
    }
  };
  return (
    <Modal show={show} onHide={handleClose} size="md" centered contentClassName="modal-style" >
      <Modal.Body className="p-5 my-3">
        <div className="text-center">
          <h3 className="fw-semibold mb-4">Are You Sure?</h3>
          <p className="text-confirm">{getTextConfirm()}</p>
        </div>
        <div className="d-flex gap-5 align-items-center mx-auto py-3 mt-5 action-button">
          <Button
            className="border-danger text-danger bg-white fw-semibold px-4 fs-5 py-1 button-no-style"
            btnName="No"
            onClick={handleClose}
          />
          <Button
            className="border-danger text-white fw-semibold px-4 fs-5 py-1 button-yes-style"
            btnName="Yes"
            onClick={action}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmModal;

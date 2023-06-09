import React from "react";
import { Modal } from "react-bootstrap";
import "./ConfirmModal.css";
import Button from "../../../element/Button/Button";
import SecondaryButton from "../../../element/Button/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../../element/Button/PrimaryButton/PrimaryButton";

const ConfirmModal = ({ show, handleClose, role, id, confirmFor, action }) => {
  const getTextConfirm = () => {
    switch (confirmFor) {
      case "add":
        return "New product will be added";
      case "edit":
        return `${role} data will change`;
      case "delete":
        return `${role} with code ${id} will be deleted`;
      case "logout":
        return "You will exit the application";
    }
  };
  return (
    <Modal show={show} onHide={handleClose} centered contentClassName="modal-style mx-auto" >
      <Modal.Body className="p-5 my-3 mx-4">
        <div className="text-center">
          <h4 className="fw-semibold mb-4">Are You Sure?</h4>
          <p className="text-confirm">{getTextConfirm()}</p>
        </div>
        <div className="d-flex gap-5 align-items-center mx-auto py-2 mt-5 action-button">
          <SecondaryButton
            className="px-4 fs-5 py-1"
            type="button"
            label="No"
            onClick={handleClose}
          />
          <PrimaryButton
            className="px-4 fs-5 py-1"
            type="submit"
            label="Yes"
            onClick={action}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmModal;
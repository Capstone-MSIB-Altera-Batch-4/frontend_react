import React from 'react'
import { Modal } from "react-bootstrap";
import InputCategoryForm from '../../InputCategoryForm/InputCategoryForm';
import './InputCategoryModal.css'

const InputCategoryModal = ({show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose} contentClassName="modal-category" >
      <Modal.Body className="p-4">
        <div className="text-center">
          <h4 className="fw-medium mb-2 text-start">Category</h4>
          <InputCategoryForm handleClose={handleClose}/>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default InputCategoryModal
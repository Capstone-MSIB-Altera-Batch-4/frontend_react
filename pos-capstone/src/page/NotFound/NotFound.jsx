import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../element/Button/PrimaryButton/PrimaryButton";

const NotFound = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/')
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Halaman Tidak Ditemukan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Halaman yang Anda cari tidak ditemukan.</p>
        <p>Anda akan dialihkan ke dashboard.</p>
      </Modal.Body>
      <Modal.Footer>
        <PrimaryButton label = "Tutup" onClick={handleCloseModal}/>
      </Modal.Footer>
    </Modal>
  );
};

export default NotFound;
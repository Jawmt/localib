import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddLocataireForm from './AddLocataireForm';
import ModifierLocataireForm from './ModifierLocataireForm';

const ModifierLocataireModal = (props) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
        <Button variant="dark" onClick={handleShow}>
            Modifier locataire
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier le client</Modal.Title>
        </Modal.Header>
        <Modal.Body><ModifierLocataireForm recupererLocataire={props.recupLocataire} locataireAModifier={props.locataireAModifier} handleClose={handleClose} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModifierLocataireModal
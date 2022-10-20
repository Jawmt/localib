import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddLocataireForm from './AddLocataireForm';

const AddLocataireModal = (props) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
        <Button className='mt-4 mb-4'  variant="dark" onClick={handleShow}>
            Ajouter locataire
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un locataire</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddLocataireForm recupererLocataire={props.recupererLocataire} handleClose={handleClose}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
    
    
}

export default AddLocataireModal
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddVehiculeForm from './AddVehiculeForm';

const AddVehiculeModal = (props) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
        <Button className='mt-4 mb-4'  variant="dark" onClick={handleShow}>
            Ajouter Vehicule
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un nouveau client</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddVehiculeForm recupererVehicules={props.recupererVehicules} handleClose={handleClose}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
    
    
}

export default AddVehiculeModal
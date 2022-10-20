import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import AddLocationVehiculeForm from './AddLocationVehiculeForm';

const LocationVehiculeModal = (props) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
          <Button className='mt-4 mb-4'  variant="dark" onClick={handleShow}>
              Louer le véhicule
          </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un nouveau client</Modal.Title>
          </Modal.Header>
          <Modal.Body><AddLocationVehiculeForm locataires={props.locataires} vehicule={props.vehicule}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default LocationVehiculeModal
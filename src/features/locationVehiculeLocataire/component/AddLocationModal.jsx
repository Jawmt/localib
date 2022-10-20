import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import AddLocationForm from './AddLocationForm';


const AddLocationModal = (props) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
        <Button className='mt-4 mb-4'  variant="dark" onClick={handleShow}>
            Ajouter une location
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter une location</Modal.Title>
          </Modal.Header>
          <Modal.Body><AddLocationForm locataires={props.locataires} vehicules={props.vehicules} handleClose={handleClose} recupererLocation={props.recupererLocation}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default AddLocationModal
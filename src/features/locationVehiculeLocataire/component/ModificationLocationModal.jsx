import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import ModificationLocationForm from './ModifLocationForm';


const ModificationLocationModal = (props) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
        <Button  variant="dark" onClick={handleShow}>
            Modifier une location
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier une location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModificationLocationForm 
                  
                  locataire={props.locataire}
                  vehicule={props.vehicule}
                  recupererLocation={props.recupererLocation}
                  locataires={props.locataires}
                  vehicules={props.vehicules}
                  locationp={props.location}
                  handleClose={handleClose}     
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default ModificationLocationModal
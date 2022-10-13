import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddLocataireForm from './AddLocataireForm';
import AddVehiculeForm from './AddVehiculeForm';
import ModifierVehiculeForm from './ModifierVehiculeForm';

const ModifierVehiculeModal = (props) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
        <Button className='success'  variant="dark" onClick={handleShow}>
            Modifier Vehicule
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier un véhicule</Modal.Title>
        </Modal.Header>
        <Modal.Body><ModifierVehiculeForm recupererVehicules={props.recupererVehicules} handleClose={handleClose} vehiculeAModifier={props.vehiculeAModifier}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
    
    
}

export default ModifierVehiculeModal
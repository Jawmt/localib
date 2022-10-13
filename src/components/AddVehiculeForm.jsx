import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { addLocataire } from '../services/locataireService';
import { addVehicule } from '../services/vehiculeService';


const AddVehiculeForm = ({recupererVehicules,handleClose}) => {
  
    const [vehicule, setVehicule] = useState({
        marque: "",
        modele: "",
        etat: "",
        prixLocJour: "",
        disponibilite: "",
        type: ""
    })

    const handleChange = (e) => {
        setVehicule({...vehicule, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        addVehicule(vehicule).then(()=> recupererVehicules());
        handleClose();
    }

    return (

        <Stack gap={3}>
            <Form.Control 
                type="text"
                value={vehicule.marque}
                name="marque"
                onChange={handleChange} 
                placeholder="Entrer le nom du véhicule" />
            <Form.Control 
                type="text"
                value={vehicule.modele}
                name="modele"
                onChange={handleChange} 
                placeholder="Entrer le nom du modèle" />
            <Form.Select value={vehicule.etat} name="etat" onChange={handleChange} >
                <option value="propre">Propre</option>
                <option value="sale">Sale</option>
            </Form.Select>
            <Form.Control 
                type="number"
                value={vehicule.prixLocJour}
                name="prixLocJour"
                onChange={handleChange} 
                placeholder="Entrer le prix de location" />
            <Form.Select value={vehicule.disponibilite} name="disponibilite" onChange={handleChange} >
                <option value="false">Non disponible</option>
                <option value="true">Disponible</option>
            </Form.Select>
            <Form.Select value={vehicule.type} name="type" onChange={handleChange} >
                <option value="citadine">Citadine</option>
                <option value="monospace">Monospace</option>
            </Form.Select>
            
            <Button variant="dark" type="submit" onClick={handleSubmit}>
                Ajouter Vehicule
            </Button>
        </Stack>
        
  )
}

export default AddVehiculeForm
import React, { useState } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'
import { addLocation } from '../../gestionDesLocations/service/locationService'


const AddLocationForm = ({vehicules, locataires,handleClose,recupererLocation}) => {
    
    const [location, setLocation] = useState({
        id_vehicule: "",
        id_locataire:"",
        dateDeDebut:"",
        dateDeFin:"",
    })

    const handleChange = (e) => {
        setLocation({...location, [e.target.name]: e.target.value});
    }

    const handleChangeSelect = (e) => {
        setLocation({...location, [e.target.name]: parseInt(e.target.value)});
    }

    const handleSubmit = () => {
        addLocation(location).then(()=> recupererLocation());
        handleClose();
    }

    return (

        <Stack gap={3}>
            <Form.Control
                as="select"
                name="id_locataire"
                value={location.id_locataire}
                onChange={handleChangeSelect}
            >
                <option value="" selected disabled>Choisir un locataire</option>
                {locataires && locataires.map((locataire)=> (
                    <option key={locataire.id} value={locataire.id}>{locataire.nom} {locataire.prenom}</option>
                ))}
            </Form.Control>
            <Form.Control
                as="select"
                name="id_vehicule"
                value={location.id_vehicule}
                onChange={handleChangeSelect}
            >
                <option value="" selected disabled>Choisir un vehicule</option>
                {vehicules && vehicules.map((vehicule)=> (
                    <option key={vehicule.id} value={vehicule.id}>{vehicule.marque} {vehicule.modele}</option>
                ))}
            </Form.Control>
            <Form.Control 
                type="date"
                value={location.dateDeDebut}
                name="dateDeDebut"
                onChange={handleChange}  />
            <Form.Control 
                type="date"
                value={location.dateDeFin}
                name="dateDeFin"
                onChange={handleChange}  />
           
            <Button variant="dark" type="submit" onClick={handleSubmit}>
                Ajouter une location
            </Button>
        </Stack>

  )
}

export default AddLocationForm
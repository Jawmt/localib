import React, { useState } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'
import { addLocation } from '../service/locationService'

const AddLocationVehiculeForm = ({vehicule, locataires}) => {
    const [location, setLocation] = useState({
        id_vehicule: vehicule.id,
        id_locataire:"",
        dateDeDebut:"",
        dateDeFin:"",
    })

    const handleChange = (e) => {
        setLocation({...location, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        // addLocataire(locataire).then(() => recupererLocataire());
        addLocation(location);
        handleClose();
    }

    return (

        <Stack gap={3}>
            <Form.Control
                as="select"
                name="id_locataire"
                value={location.id_locataire}
                onChange={handleChange}
            >
                <option selected disabled>Choisir un locataire</option>
                {locataires && locataires.map((locataire)=> (
                    <option key={locataire.id} value={locataire.id}>{locataire.nom} {locataire.prenom}</option>
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

export default AddLocationVehiculeForm
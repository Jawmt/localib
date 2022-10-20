import React, { useState } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'
import { addLocation, modifierLocation } from '../../gestionDesLocations/service/locationService'


const ModificationLocationForm = ({vehicules, locataires,handleClose,recupererLocation, vehicule, locationp,locataire}) => {
      

    const [location, setLocation] = useState({
        id_vehicule: locationp.id_vehicule,
        id_locataire: locationp.id_locataire,
        dateDeDebut: locationp.dateDeDebut,
        dateDeFin: locationp.dateDeFin,
    })

    const handleChange = (e) => {
        setLocation({...location, [e.target.name]: e.target.value});
    }

    const handleChangeSelect = (e) => {
        setLocation({...location, [e.target.name]: parseInt(e.target.value)});
    }

    const handleSubmit = () => {
        modifierLocation(locationp.id, location).then(()=> recupererLocation());
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
                <option value={locataire.id} selected >{locataire.nom} {locataire.prenom}</option>
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
                <option value={vehicule.id} selected disabled>{vehicule.marque} {vehicule.modele}</option>
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

export default ModificationLocationForm
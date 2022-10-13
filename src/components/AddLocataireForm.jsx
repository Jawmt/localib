import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import { addLocataire } from '../services/locataireService';


const AddLocataireForm = () => {
  
    const [locataire, setLocataire] = useState({
        nom:"",
        prenom:"",
        dateDeNaissance:"",
        email:"",
        tel:""
    })

    const handleChange = (e) => {
        setLocataire({...locataire, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        addLocataire(locataire);
    }

    return (
    <Form onSubmit={handleSubmit}>
        <Stack gap={3}>
        <Form.Control 
            type="text"
            value={locataire.nom}
            name="nom"
            onChange={handleChange} 
            placeholder="Entrer votre nom" />
        <Form.Control 
            type="text"
            value={locataire.prenom}
            name="prenom"
            onChange={handleChange} 
            placeholder="Entrer votre prénom" />
        <Form.Control 
            type="date"
            value={locataire.dateDeNaissance}
            name="dateDeNaissance"
            onChange={handleChange}  />
        <Form.Control 
            type="text"
            value={locataire.email}
            name="email"
            onChange={handleChange} 
            placeholder="Entrer votre email" />
        <Form.Control 
            type="text"
            value={locataire.tel}
            name="tel"
            onChange={handleChange} 
            placeholder="Entrer votre numéro de téléphone" />
        
        <Button variant="dark" type="submit">
            Ajouter locataire
        </Button>
        </Stack>
        

       
        
    </Form>
  )
}

export default AddLocataireForm
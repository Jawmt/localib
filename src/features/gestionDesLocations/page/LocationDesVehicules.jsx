import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { getAllLocataire } from '../../locataire/services/locataireService';
import { getAllVehicule } from '../../vehicule/services/vehiculeService';
import LocationVehiculeLayout from '../layouts/LocationVehiculeLayout';

const LocationDesVehicules = () => {
    
    const [vehicules, setVehicules] = useState();
    const [locataires, setLocataires] = useState();
    

    useEffect(()=> {
      recupererLocataires();
      recupererVehicules();
    },[])
    
    const recupererVehicules = () => {
      getAllVehicule().then((res)=> setVehicules(res));
    }

    const recupererLocataires = () => {
      getAllLocataire().then((res)=> setLocataires(res));
    }
  
    return (
      <Container className='mt-3'>
        <LocationVehiculeLayout vehicules={vehicules} locataires={locataires}/>
      </Container>
    
  )
}

export default LocationDesVehicules
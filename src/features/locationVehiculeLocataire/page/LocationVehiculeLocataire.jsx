import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { getAllLocation } from '../../gestionDesLocations/service/locationService';
import AddLocataireModal from '../../locataire/component/AddLocataireModal';
import { getAllLocataire } from '../../locataire/services/locataireService';
import { getAllVehicule } from '../../vehicule/services/vehiculeService';
import AddLocationModal from '../component/AddLocationModal';
import LocationVehiculeLayout from '../layout/LocationVehiculeLayout';

const LocationVehiculeLocataire = () => {
    
    
    const [vehicules, setVehicules] = useState();
    const [locataires, setLocataires] = useState();
    const [locations, setLocations]= useState();

    useEffect(()=> {
      recupererLocataires();
      recupererVehicules();
      recupererLocation();
    },[])
    
    const recupererVehicules = () => {
      getAllVehicule().then((res)=> setVehicules(res));
    }

    const recupererLocataires = () => {
      getAllLocataire().then((res)=> setLocataires(res));
    }
    
    const recupererLocation = () => {
        getAllLocation().then((res) => setLocations(res));
    }

    return (
      <Container className='mt-3'>
        <AddLocationModal vehicules={vehicules} locataires={locataires} recupererLocation={recupererLocation} />
        <LocationVehiculeLayout locations={locations} vehicules={vehicules} locataires={locataires} recupererLocation={recupererLocation} />
      </Container>

    )
}

export default LocationVehiculeLocataire
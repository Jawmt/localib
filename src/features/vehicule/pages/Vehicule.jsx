import React, { useEffect, useState } from 'react'
import VehiculeLayout from '../layouts/VehiculeLayout';
import { getAllVehicule } from '../services/vehiculeService';
import Container from 'react-bootstrap/Container';
import AddVehiculeModal from '../components/AddVehiculeModal';

const Vehicule = () => {
    
    const [vehicules, setVehicules] = useState([]);
    
    useEffect(() => {
        recupererVehicules();
    },[]);

    const recupererVehicules = () => {
        getAllVehicule().then((res)=> setVehicules(res));
    }

    return (
        <>  
            <Container className='mt-3'>
                <AddVehiculeModal recupererVehicules={recupererVehicules}  />
                <VehiculeLayout vehicules={vehicules} recupererVehicules={recupererVehicules} />
            </Container>
        </>
  )
}

export default Vehicule
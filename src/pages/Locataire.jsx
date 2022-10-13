import React, { useEffect, useState } from 'react'
import AddLocataireForm from '../components/AddLocataireForm';
import LocataireLayout from '../layouts/LocataireLayout';
import { getAllLocataire } from '../services/locataireService';
import Container from 'react-bootstrap/Container';


const Locataire = () => {
    
    const [locataires, setLocataires] = useState([]);

    useEffect(() => {
        getAllLocataire()
            .then((res)=>setLocataires(res));
    },[]);
    return (
        <>
            <Container>
                <LocataireLayout locataires={locataires}/>
                <AddLocataireForm />
            </Container>
            
        </>
    )
}

export default Locataire
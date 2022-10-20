import React, { useEffect, useState } from 'react'

import { getAllLocataire } from '../services/locataireService';
import Container from 'react-bootstrap/Container';
import AddLocataireModal from '../component/AddLocataireModal';
import LocataireLayout from '../layout/LocataireLayout';


const Locataire = () => {
    
    const [locataires, setLocataires] = useState([]);

    useEffect(() => {
        recupererLocataire()
    },[]);

    const recupererLocataire = () => {
        getAllLocataire()
            .then((res)=> setLocataires(res))
    }

    return (
        <>
            <Container>
                <AddLocataireModal recupererLocataire={recupererLocataire}  />
                <LocataireLayout locataires={locataires} recupererLocataire={recupererLocataire} />
            </Container>
            
        </>
    )
}

export default Locataire
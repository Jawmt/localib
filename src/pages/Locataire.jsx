import React, { useEffect, useState } from 'react'
import LocataireListe from '../components/LocataireListe';
import LocataireLayout from '../layouts/LocataireLayout';
import { getAllLocataire } from '../services/locataireService';

const Locataire = () => {
    
    const [locataires, setLocataires] = useState([]);

    useEffect(() => {
        getAllLocataire()
            .then((res)=>setLocataires(res));
      });
  
    return (
        <LocataireLayout locataires={locataires}/>
        
    )
}

export default Locataire
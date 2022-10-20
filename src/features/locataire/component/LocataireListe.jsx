import React from 'react'
import Button from 'react-bootstrap/Button';
import { supprimerLocataire } from '../services/locataireService';
import { useNavigate } from "react-router-dom";
import ModifierLocataireModal from './ModifierLocataireModal';


const LocataireListe = ({locataire,recupLocataire}) => {
  

  const handleDelete= () => {
    supprimerLocataire(locataire.id).then(()=> recupLocataire());
  }
  
  return (
    <tr>
          <td>{locataire.id}</td>
          <td>{locataire.nom}</td>
          <td>{locataire.prenom}</td>
          <td>{locataire.dateDeNaissance}</td>
          <td>{locataire.email}</td>
          <td>{locataire.tel}</td>
          <td><ModifierLocataireModal recupLocataire={recupLocataire} locataireAModifier={locataire}/></td>
          <td><Button variant="danger" onClick={handleDelete}>Supprimer</Button></td>

    </tr>
  )
}

export default LocataireListe
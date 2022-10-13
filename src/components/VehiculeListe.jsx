import React from 'react'
import Button from 'react-bootstrap/Button';
import { supprimerVehicule } from '../services/vehiculeService';


const VehiculeListe = ({vehicule,recupererVehicules}) => {
  

  const handleDelete= () => {
    supprimerVehicule(vehicule.id).then(()=> recupererVehicules());
  }
  
  return (
    <tr>
          <td>{vehicule.id}</td>
          <td>{vehicule.marque}</td>
          <td>{vehicule.modele}</td>
          <td>{vehicule.etat}</td>
          <td>{vehicule.prixLocJour}</td>
          <td>{vehicule.disponibilite}</td>
          <td>{vehicule.type}</td>
          <td><Button variant="danger" onClick={handleDelete}>Supprimer</Button></td>
    </tr>
  )
}

export default VehiculeListe
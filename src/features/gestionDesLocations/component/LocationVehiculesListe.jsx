import React from 'react'
import LocationVehiculeModal from './LocationVehiculeModal'

const LocationVehiculesListe = ({vehicule,locataires}) => {
  
  return (
    <tr>
          <td>{vehicule.id}</td>
          <td>{vehicule.marque}</td>
          <td>{vehicule.modele}</td>
          <td>{vehicule.etat}</td>
          <td>{vehicule.prixLocJour}</td>
          <td>{vehicule.disponibilite}</td>
          <td>{vehicule.type}</td>
          <td>{vehicule.disponibilite == "Disponible" ?  <LocationVehiculeModal vehicule={vehicule} locataires={locataires} /> : <p>Location impossible</p>}</td>
    </tr>
  )
}

export default LocationVehiculesListe
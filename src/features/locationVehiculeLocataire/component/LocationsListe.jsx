import React from 'react'
import { Button } from 'react-bootstrap';
import { supprimerLocation } from '../../gestionDesLocations/service/locationService'
import ModificationLocationModal from './ModificationLocationModal';

const LocationsListe = ({location, locataire, vehicule, recupererLocation, locataires, vehicules}) => {
  
    const handleDelete = () => {
        supprimerLocation(location.id).then(()=> recupererLocation()); 
    }

    return (
            <tr>
                    <td>{location.id}</td>
                    <td>{locataire && locataire.nom}</td>
                    <td>{locataire && locataire.prenom}</td>
                    <td>{vehicule && vehicule.marque}</td>
                    <td>{vehicule && vehicule.modele}</td>
                    <td>{location.dateDeDebut}</td>
                    <td>{location.dateDeFin}</td>
                    <td><ModificationLocationModal 
                            location={location}
                            locataire={locataire}
                            vehicule={vehicule}
                            recupererLocation={recupererLocation}
                            locataires={locataires}
                            vehicules={vehicules}      
                        />
                    </td>
                    <td><Button variant="danger" onClick={handleDelete}>Supprimer</Button></td>
            </tr>
  )
}

export default LocationsListe
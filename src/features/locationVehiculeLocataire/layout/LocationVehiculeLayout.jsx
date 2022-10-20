import React from 'react'
import { Table } from 'react-bootstrap'
import LocationsListe from '../component/LocationsListe'

const LocationVehiculeLayout = ({locations, locataires, vehicules, recupererLocation}) => {
  return (
    <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nom Locataire</th>
                    <th>Prénom Locataire</th>
                    <th>Vehicule Marque</th>
                    <th>Vehicule Modele</th>
                    <th>Date de debut</th>
                    <th>Date de fin</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                </tr>
            </thead>
            <tbody>
                {locations && locations.map((location)=>
                    <LocationsListe 
                      key={location.id} 
                      location={location} 
                      locataire={locataires.find( (locataire) => locataire.id == location.id_locataire)} 
                      vehicule={vehicules.find((vehicule)=> vehicule.id == location.id_vehicule)}
                      recupererLocation={recupererLocation}
                      vehicules={vehicules}
                      locataires={locataires}
                      />
                )} 
            </tbody>
    </Table>
  )
}

export default LocationVehiculeLayout
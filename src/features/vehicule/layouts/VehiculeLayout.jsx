import React from 'react'
import Table from 'react-bootstrap/Table';
import VehiculeListe from '../components/VehiculeListe';

const VehiculeLayout = ({vehicules,recupererVehicules}) => {
  return (
    

        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Modele</th>
                <th>Immatriculation</th>
                <th>Etat du véhicule</th>
                <th>Prix Location Jour</th>
                <th>Diponibilité</th>
                <th>Type</th>
                <th>Supprimer</th>
                </tr>
            </thead>
            <tbody>
                {vehicules && vehicules.map((vehicule)=>
                    <VehiculeListe key={vehicule.id} vehicule={vehicule} recupererVehicules={recupererVehicules}/>
                )}
      </tbody>
    </Table>
 
    
  )
}

export default VehiculeLayout
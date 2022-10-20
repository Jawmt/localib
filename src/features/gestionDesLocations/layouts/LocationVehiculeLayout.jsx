import React, { useEffect, useState } from 'react'
import { Table, ToggleButton } from 'react-bootstrap'
import LocationVehiculesListe from '../component/LocationVehiculesListe';

const LocationVehiculeLayout = ({vehicules, locataires}) => {
  
    const [estDisponible, setEstDisponible] = useState(false);

    return (
        <>
            <ToggleButton
            id="toggle-check"
            type="checkbox"
            variant="outline-primary"
            checked={estDisponible}
            value="ezfez"
            onChange={(e) => setEstDisponible(e.currentTarget.checked)}
            >Est disponible ?</ToggleButton>
        <Table striped bordered hover className='mt-3'>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Modele</th>
                    <th>Immatriculation</th>
                    <th>Etat du véhicule</th>
                    <th>Prix Location Jour</th>
                    <th>Diponibilité</th>
                    <th>Type</th>
                    <th>Effectuer Une location</th>
                    </tr>
                </thead>
                <tbody>
                    {estDisponible ? vehicules && vehicules.filter((vehicule) => vehicule.disponibilite == "Disponible").map((vehiculeFiltrer) => 
                        <LocationVehiculesListe key={vehiculeFiltrer.id} vehicule={vehiculeFiltrer} locataires={locataires}/>
                    )
            
                    : vehicules && vehicules.map((vehicule)=>
                        <LocationVehiculesListe key={vehicule.id} vehicule={vehicule} locataires={locataires}/>
                    )}
                
                </tbody>
        </Table>
        </>
        
  )
}

export default LocationVehiculeLayout
import React from 'react'
import Table from 'react-bootstrap/Table';
import LocataireListe from '../components/LocataireListe';

const LocataireLayout = ({locataires}) => {
  return (
    

        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>DateDeNaissance</th>
                <th>Email</th>
                <th>NumeroTel</th>
                </tr>
            </thead>
            <tbody>
                {locataires && locataires.map((locataire)=>
                    <LocataireListe key={locataire.id} locataire={locataire}/>
                )}
      </tbody>
    </Table>
 
    
  )
}

export default LocataireLayout
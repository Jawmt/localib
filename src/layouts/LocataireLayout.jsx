import React from 'react'
import Table from 'react-bootstrap/Table';
import LocataireListe from '../components/LocataireListe';

const LocataireLayout = ({locataires}) => {
  return (
    
    <Container>
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
                    <LocataireListe locataire={locataire}/>
                )}
      </tbody>
    </Table>
    </Container>
    
  )
}

export default LocataireLayout
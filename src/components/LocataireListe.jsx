import React from 'react'
import Table from 'react-bootstrap/Table';


const LocataireListe = ({locataire}) => {
  return (
    <tr>
          <td>{locataire.id}</td>
          <td>{locataire.nom}</td>
          <td>{locataire.prenom}</td>
          <td>{locataire.dateDeNaissance}</td>
          <td>{locataire.email}</td>
          <td>{locataire.tel}</td>
    </tr>
  )
}

export default LocataireListe
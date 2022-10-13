
const URI= "http://localhost:3004"; 

export const getAllLocataire = () => {
    return fetch(`${URI}/locataire`)
                .then((result)=> result.json())
                .catch((err)=>console.log(err))
}

export const addLocataire = (locataire) => {
    return fetch(`${URI}/locataire`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(locataire)
    })      
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const supprimerLocataire = (id) => {
    return fetch(`${URI}/locataire/${id}`,{
        method:"DELETE"
    })
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
}

export const modifierLocataire = (id, locataire) => {
    return fetch(`${URI}/locataire/${id}`,{
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(locataire)
    })      
    .then(res => res.json())
    .catch(err => console.log(err))
}


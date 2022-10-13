const URI= "http://localhost:3004"; 

export const getAllVehicule = () => {
    return fetch(`${URI}/vehicule`)
                .then((result)=> result.json())
                .catch((err)=>console.log(err))
}

export const addVehicule = (vehicule) => {
    return fetch(`${URI}/vehicule`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(vehicule)
    })      
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const supprimerVehicule = (id) => {
    return fetch(`${URI}/vehicule/${id}`,{
        method:"DELETE"
    })
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
}
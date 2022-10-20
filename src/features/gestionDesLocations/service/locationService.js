const URI= "http://localhost:3004"; 

export const getAllLocation = () => {
    return fetch(`${URI}/location`)
                .then((result)=> result.json())
                .catch((err)=>console.log(err))
}

export const addLocation= (location) => {
    return fetch(`${URI}/location`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(location)
    })      
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const supprimerLocation = (id) => {
    return fetch(`${URI}/location/${id}`,{
        method:"DELETE"
    })
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
}

export const modifierLocation = (id, location) => {
    return fetch(`${URI}/location/${id}`,{
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(location)
    })      
    .then(res => res.json())
    .catch(err => console.log(err))
}

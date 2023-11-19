import axios from "axios"

const baseUrl = 'https://cultmaps.onrender.com/'

export function getAllEventos (){
    const response = axios.get(`${baseUrl}eventos/`) 

    return response
}

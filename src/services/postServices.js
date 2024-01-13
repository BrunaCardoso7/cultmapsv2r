import axios from "axios"
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"
const baseUrl = 'https://cultmaps.onrender.com/'

export function getAllEventos (){
    const response = axios.get(`${baseUrl}eventos`) 

    return response
}

export async function searchEventos(title){
    const response = await axios.get(`${baseUrl}eventos/search?title=${title}`)
    console.log("service: ", response.data.results)
    return response.data.results
}

export function postEventos (data){
    try {    

        const token = Cookies.get("token")
    
        const userId = jwtDecode(token)
        console.log(userId.id)
        const formData = new FormData();
    
        formData.append('userId', userId.id)
        console.log(data.file)
        formData.append('nome', data.nome)
        formData.append('autor', data.autor)
        formData.append('descricao', data.descricao)
        formData.append('categoria', data.categoria)
        formData.append('data', data.data)
        formData.append('dataOpt', data.dataOpt)
        formData.append('localizacao', data.localizacao)
        formData.append('faixaEtaria', data.faixaEtaria)
        formData.append('organizadores', data.organizadores)
        formData.append('patrocinadores', data.patrocinadores)

        console.log("data"+data.file);
        formData.append('file', data.file);


    
        const response = axios.post(`${baseUrl}eventos/`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    
        return response
    } catch (error) {
        console.log(error)
    }
}

export function getEventsUser(){
    try {
        console.log('deu certo')
        const token = Cookies.get("token")
    
        const response = axios.get(`${baseUrl}eventos/byUser`, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
        return response
    } catch (error) {
        console.log('merda')
        return error
    }

}
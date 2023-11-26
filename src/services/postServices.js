import axios from "axios"
import Cookies from "js-cookie"
const baseUrl = 'https://cultmaps.onrender.com/'

export function getAllEventos (){
    const response = axios.get(`${baseUrl}eventos`) 

    return response
}
export function searchEventos(title){
    const response = axios.get(`${baseUrl}eventos/search?title=${title}`)
    
    return response
}

export function postEventos (data){
    try {
        
        const token = Cookies.get("token")
    
        const formData = new FormData();
        console.log(data)
    
        // formData.append('usuario_id', userId)
        console.log(data.file[0])
        formData.append('nome', data.nome)
        formData.append('author', data.autor)
        formData.append('descricao', data.descricao)
        formData.append('categoria', data.categoria)
        formData.append('data', data.data)
        formData.append('localizacao', data.localizacao)
        formData.append('file', data.file[0])
    
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
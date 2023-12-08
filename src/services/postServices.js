import axios from "axios"
import Cookies from "js-cookie"
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
    
        const formData = new FormData();
        console.log(data)
    
        // formData.append('usuario_id', userId)
        console.log(data.file[0])
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
        if (data.file && data.file.length > 0) {
            console.log(data.file[0]);
            formData.append('file', data.file[0])
        }

    
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
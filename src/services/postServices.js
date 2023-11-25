import axios from "axios"
// import { jwtDecode } from "jwt-decode"
// import Cookies from "js-cookie"
const baseUrl = 'https://cultmaps.onrender.com/'

export function getAllEventos (){
    const response = axios.get(`${baseUrl}eventos/`) 

    return response
}
export function searchEventos(title){
    const response = axios.get(`${baseUrl}eventos/search?title=${title}`)
    
    return response
}

export function postEventos (data){
    const formData = new FormData();

    // const token = Cookies.get("token")

    // const decodeToken = jwtDecode(token)

    // const userId = decodeToken.id

    // console.log("evetnto: " +    userId)

    // formData.append('usuario_id', userId)

    formData.append('nome', data.nome)
    formData.append('author', data.autor)
    formData.append('descricao', data.descricao)
    formData.append('categoria', data.categoria)
    formData.append('data', data.data)
    formData.append('localizacao', data.localizacao)
    formData.append('file', data.file[0])

    return axios.post(`${baseUrl}eventos/`, formData)
}
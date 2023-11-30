import axios from "axios";
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode';

const baseUrl = 'https://cultmaps.onrender.com/'

export const signup = (data)=>{
    const formData = new FormData()
    delete data.passwordConfirm

    formData.append('nome', data.nome);
    formData.append('usuario', data.usuario);
    formData.append('email', data.email);
    formData.append('password', data.password); 
    console.log(data)

    console.log(formData)

    return axios.post(`${baseUrl}users/register`, formData)
}   

export const userLogged=()=>{
    const token = Cookies.get("token");

    const decodedToken = jwtDecode(token)

    const userId = decodedToken.id

    const response = axios.get(`${baseUrl}users/findById/${userId}`, {

        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          id: userId
        },
      });
      return response;
}



export const signin=(data)=>{
    const formData = new FormData
    formData.append('email', data.email)
    formData.append('password', data.password)

    return axios.post(`${baseUrl}auth/login`, formData)
}







// function genenateUserName(name){
//     const tirarEspaços = str.replace(/\s/g, "").toLowerCase
//     const randomNumber = Math.floor(Math.random()*1000)
//     return `${tirarEspaços}${randomNumber}`
// }
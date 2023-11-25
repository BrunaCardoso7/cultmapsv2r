import './style/singin.css';
import Input from '../../components/Input/Input';
import { signin } from '../../services/userServices';

import { useForm } from 'react-hook-form';
import { signInSchema } from '../../Schema/signInSchema';
import { zodResolver } from '@hookform/resolvers/zod';

import Cookies from 'js-cookie'
import {  useNavigate } from 'react-router-dom';


function SignIn() {

  const {register: registerSingin,
         handleSubmit, 
         formState: { errors },
        } = useForm({
            resolver: zodResolver(signInSchema)
  })
  
  const navigate = useNavigate()

  async function inHandleSubmit(data){
    try {
      const response = await signin(data)
      
      Cookies.set("token", response.data.token, { expires: 1 })
      navigate('/')
    } catch (error) {
      console.log(error)
    }


  }
  return(
    <>
        <h2>login</h2>
        <form onSubmit={handleSubmit(inHandleSubmit)}>
            <Input type="email" 
            placeholder="email" 
            name="email"
            register={registerSingin}
            />
            {errors.email && (<p>{errors.email.message}</p>)}

            <Input type="text" 
            placeholder="password" 
            name="password"
            register={registerSingin}
            />
            {errors.password && (<p>{errors.password.message}</p>)}
            <button>Login teste</button>
        </form>
    </>
  )
}

export default SignIn;
import './style/singin.css';
import Input from '../../components/Input/Input';
// import {zodResolver} from '@hookform/resolvers'
import { useForm } from 'react-hook-form';

function SignIn() {
  const {register: registerSingin,
         handleSubmit, 
        } = useForm()
  function inHandleSubmit(data){
    console.log(data)
  }
  return(
    <>
        <h2>login</h2>
        <form onSubmit={handleSubmit(inHandleSubmit)}>
            <Input type="text" 
            placeholder="nome" 
            name="nome"
            register={registerSingin}
            />
            <Input type="email" 
            placeholder="email" 
            name="email"
            register={registerSingin}
            />
            <Input type="text" 
            placeholder="password" 
            name="password"
            register={registerSingin}
            />
            <Input type="text" 
            placeholder="password" 
            name="confirmPassword"
            register={registerSingin}
            />
            <button>Login teste</button>
        </form>
    </>
  )
}

export default SignIn;
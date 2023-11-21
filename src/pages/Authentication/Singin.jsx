import './style/singin.css';
import Input from '../../components/Input/Input';
import {zodResolver} from '@hookform/resolvers'
import { useForm } from 'react-hook-form';

function SignIn() {
  const {
    register, 
    handleSubmit,
    // formState:{ errors },
  } = useForm({
    // eslint-disable-next-line no-undef
    resolver: zodResolver(signSchema)
  })
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
            register={register}
            />
            <Input type="email" 
            placeholder="email" 
            name="email"
            register={register}
            />
            <Input type="text" 
            placeholder="password" 
            name="password"
            register={register}
            />
            <Input type="text" 
            placeholder="password" 
            name="confirmPassword"
            register={register}
            />
            <button>Login teste</button>
        </form>
    </>
  )
}

export default SignIn;
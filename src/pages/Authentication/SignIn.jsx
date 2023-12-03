import './style/singin.css';
import Input from '../../components/Input/Input';
import { signin } from '../../services/userServices';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useForm } from 'react-hook-form';
import { signInSchema } from '../../Schema/signInSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import Cookies from 'js-cookie'
import {  useNavigate } from 'react-router-dom';
import { StyledLink } from '../../components/Navbar/style/navbar';
import { jwtDecode } from 'jwt-decode';
import { Body } from './style/singnin';
function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {register: registerSingin,
         handleSubmit, 
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
    <Body>
     <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(inHandleSubmit)}>

          <div className="user">
            <label htmlFor="nome">Usuário</label>
            <Input id={"nome"} type="email" 
              placeholder="email" 
              name="email"
              register={registerSingin}
            />
          </div>

          <div className="senha">
            <label htmlFor="senha" onClick={() => togglePassword()}>Senha</label>
            <Input type="text" 
              placeholder="password" 
              name="password"
              register={registerSingin}
              />
              <i className={`fa ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
                id="eyeIcon" onClick={() => togglePassword()}>
              </i>
            <p>Esqueceu a senha?</p>
          </div>

          <div className="Entrada">
            <button>Entrar</button>
            <p>Não tem uma conta <StyledLink to={'/auth'}> Cadastre-se</StyledLink></p>
          </div>

          <div id="Icons">
            <p>Logar com</p>

            <div className="icones">
              <a><GoogleOAuthProvider clientId="45722718406-hog0njoca92h3km6cjfsshuqe4lqe0ba.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    const decoded = jwtDecode(credentialResponse.credential);
                    console.log(decoded);
                  } }
                  onError={() => {
                    console.log('Login Failed');
                  } }
                  shape={'square'}
                  theme='outline' />
              </GoogleOAuthProvider>
              </a>
            </div>
          </div>

        </form>
      </div>
    </Body>
  )
}

export default SignIn;
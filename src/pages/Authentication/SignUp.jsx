import { useState } from 'react';
import './style/singup.css';
import 'font-awesome/css/font-awesome.min.css';
// eslint-disable-next-line no-unused-vars
// import { validatePassword } from './cadastro.js';
import { useForm } from 'react-hook-form';
import { signupSchema } from '../../Schema/signupSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../components/Input/Input';
import { signup } from '../../services/userServices';
import Cookies  from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { validatePassword } from './cadastro.js';

const SignUpForm = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePasswordAndSetError(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswordAndSetError(password, e.target.value);
  };

  const validatePasswordAndSetError = (password, confirmPassword) => {
    const error = validatePassword(password, confirmPassword);
    setPasswordError(error);
  };

  const handleTogglePasswordVisibility = (field) => {
    if (field === 'password') {
      setPasswordVisible(!passwordVisible);
    } else if (field === 'confirmPassword') {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };
  

  
  const {
      register: registerSingup,
      handleSubmit, 
    // formState: { errors },
   } = useForm({
       resolver: zodResolver(signupSchema)
   })

  //n apagar
  const navigate = useNavigate()

    async function upHandleSubmit(data){

        try {
          const response = await signup(data)

          console.log("resposta",response.data)
          console.log(response.data.token)
          Cookies.set("token", response.data.token, { expires: 1 })
          navigate('/')
        } catch (error) {
          console.log(data)
          console.log('error',error)
        }
    }

  return (

    <div className="container">
    <div className="form-image">
      <img src="Nordeste.png" alt="" />
    </div>  

    <div className="form">
      <form onSubmit={handleSubmit(upHandleSubmit)}  encType="multipart/form-data">
        <h1>Cadastre-se</h1>

        <div className="input-group">
         
          <div className="input-box">
            <label htmlFor="firstname">Nome</label>
            <Input 
                id="firstname"
                type={"text"} 
                placeholder={"Digite seu nome"} 
                name={"nome"}
                register={registerSingup}
                required
              />
            {/* <input id="firstname" type="text" name="firstname" placeholder="Digite seu nome"/> */}
          </div>

          <div className="input-box">
            <label htmlFor="lastname">Usuário</label>
            <Input 
                id="lastname"
                type={"text"} 
                placeholder={"Digite seu sobrenome"} 
                name={"usuario"}
                register={registerSingup}
                required
              />
            {/* <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" required /> */}
          </div>

          <div className="input-box">
            <label htmlFor="email">E-mail</label>
            <Input 
                id="email"
                type={"text"} 
                placeholder={"Digite seu e-mail"} 
                name={"email"}
                register={registerSingup}
                required
              />
            {/* <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required /> */}
          </div>

          <div className="input-box">
            <select name="" id="bairros" required>
              <optgroup label="">
                <option value="" disabled selected hidden>Cidade</option>
              </optgroup>
              <option className="option" value="bairro1">Teresina</option>
              <option className="option" value="bairro2">Nazaria</option>
              <option className="option" value="bairro3">Picos</option>
            </select>
          </div>

          <div className="input-box">
            <label htmlFor="password" id="labelSenha"> Senha </label>
            <input
              id="password"
              type={passwordVisible ? 'text' : 'password'}
              name={"password"}
              placeholder="Digite sua senha"
              {...registerSingup('password')}
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <i
              className={`fa ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
              id="eyeIcon1"
              onClick={() => handleTogglePasswordVisibility('password')}
            ></i>
            <span id="passwordError" className="error" dangerouslySetInnerHTML={{ __html: passwordError }}></span>
          </div>

          <div className="input-box">
            <label htmlFor="confirmPassword" id="labelConfirmarSenha">
              Confirme sua Senha
            </label>
            <input
              id="confirmPassword"
              type={confirmPasswordVisible ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirme a senha"
              required
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <i
              className={`fa ${confirmPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
              id="eyeIcon2"
              onClick={() => handleTogglePasswordVisibility('confirmPassword')}
            ></i>
          </div>

          <div className="label-float">
            <input type="checkbox" id="privacyCheckbox" required />
            <label htmlFor="privacyCheckbox" id="privacyLabel">
              Eu concordo com os termos de privacidade
            </label>
          </div>
        </div>

        <div className="continue-button">
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  </div>
);
  
  }
export default SignUpForm;

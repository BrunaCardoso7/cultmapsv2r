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
import { useNavigate, Link } from 'react-router-dom';

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [passwordError, setPasswordError] = useState('');

  const {register: registerSingup,
    handleSubmit, 
    // formState: { errors },
   } = useForm({
       resolver: zodResolver(signupSchema)
   })

   
   // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  //   validatePasswordAndSetError(e.target.value, confirmPassword);
  // };

  // const handleConfirmPasswordChange = (e) => {
  //   setConfirmPassword(e.target.value);
  //   validatePasswordAndSetError(password, e.target.value);
  // };

  // const validatePasswordAndSetError = (password, confirmPassword) => {
  //   const error = validatePassword(password, confirmPassword);
  //   setPasswordError(error);
  // };

  const handleTogglePasswordVisibility = (field) => {
    if (field === 'password') {
      setPasswordVisible(!passwordVisible);
    } else if (field === 'confirmPassword') {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  const navigate = useNavigate()

    async function upHandleSubmit(data){
        try {
          const response = await signup(data)
          console.log(response.data)
          console.log(response.data.token)
          Cookies.set("token", response.data.token, { expires: 1 })
          navigate('/')
        } catch (error) {
          console.log(error)
        }
    }

  return (

    <div className="container">
        
      <div className="form-image">
        <img src="WhatsApp Image 2023-11-11 at 21.20.52.jpeg" alt="" />
      </div>

      <div className="form" >
        <form onSubmit={handleSubmit(upHandleSubmit)} encType="multipart/form-data">
          <h1>Cadastre-se</h1>

          <div className="input-group">
            <div className="input-box">
              <label htmlFor="firstname">Nome</label>
              <Input type="text" 
                placeholder="nome" 
                name="nome"
                register={registerSingup}
              />
            </div>

            <div className="input-box">
              <label htmlFor="lastname">Usuário</label>
              <Input type="text" 
                placeholder="nome usuário" 
                name="usuario"
                register={registerSingup}
              />
            </div>

            <div className="input-box">
              <label htmlFor="email">E-mail</label>
              <Input type="email" 
                placeholder="E-mail" 
                name="email"
                register={registerSingup}
              />
            </div>

            <div className="input-box">
              <select name="bairro" id="bairros" required>
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
              <Input type="password" 
                placeholder="senha" 
                name="password"
                register={registerSingup}
              />
              <i
                className={`fa ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
                id="eyeIcon1"
                onClick={() => handleTogglePasswordVisibility('password')}
              ></i>
              {/* <span id="passwordError" className="error" dangerouslySetInnerHTML={{ __html: passwordError }}></span> */}
            </div>

            <div className="input-box">
              <label htmlFor="confirmPassword" id="labelConfirmarSenha">
                Confirme sua Senha
              </label>
              <Input type="password" 
                placeholder="confimar senha" 
                name="passwordConfirm"
                register={registerSingup}
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
              <p>Já tem uma conta? <Link to={'/login'}>entra</Link></p>
            </div>
          </div>

          <div className="continue-button">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

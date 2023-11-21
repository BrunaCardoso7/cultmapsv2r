import { useState } from 'react';
import './style/singup.css';

// eslint-disable-next-line no-unused-vars
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (

    <div className="container">
        
      <div className="form-image">
        <img src="WhatsApp Image 2023-11-11 at 21.20.52.jpeg" alt="" />
      </div>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>Cadastre-se</h1>

          <div className="input-group">
           
            <div className="input-box">
              <label htmlFor="firstname">Nome</label>
              <input id="firstname" type="text" name="firstname" placeholder="Digite seu nome" required />
            </div>

            <div className="input-box">
              <label htmlFor="lastname">Usuário</label>
              <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" required />
            </div>

            <div className="input-box">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required />
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
                name="password"
                placeholder="Digite sua senha"
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
};

export default SignUpForm;

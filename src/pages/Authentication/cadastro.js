export const validatePassword = (password, confirmPassword) => {
    // eslint-disable-next-line no-unused-vars
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    const errorMessages = [];
  
    if (password.length < 8) {
      errorMessages.push("- A senha deve ter pelo<br> menos 8 caracteres.");
    }
    if (!/[A-Z]/.test(password)) {
      errorMessages.push("- A senha deve ter pelo menos<br> uma letra maiúscula.");
    }
    if (!/\d/.test(password)) {
      errorMessages.push("- A senha deve ter pelo menos<br> um número.");
    }
  
    if (password !== confirmPassword) {
      errorMessages.push("As senhas não coincidem.");
    }
      return errorMessages.join('<br>');
  };
  
  export const togglePasswordVisibility = (inputId, iconId) => {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById(iconId);
  
    if (passwordInput && eyeIcon) {
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      eyeIcon.className = `fa fa-eye${type === 'password' ? '-slash' : ''}`;
    }
  };
  
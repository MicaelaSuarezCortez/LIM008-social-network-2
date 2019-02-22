import {signUp} from '../controllers/controller-firebase.js';
import {emailValidation, passwordValidation} from '../controllers/validation-email-password.js';

const changeHash = (hash) => {
  windows.location.hash = hash;
};

export const signUpOnSubmit = () => {
  const txtName = document.querySelector('#txt-name').value;
  const txtEmail = document.querySelector('#txt-email').value;
  const txtPassword = document.querySelector('#txt-password').value;
  console.log(txtEmail, txtPassword);
  if (emailValidation && passwordValidation) {  
    signUp(txtEmail, txtPassword)      
      .then(() => changeHash('/signIn'))
      .catch(() => {});
  } else {
    alert('email o contraseña incorrectos');
  }
};
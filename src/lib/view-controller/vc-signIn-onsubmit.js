import {signIn} from '../controllers/controller-firebase.js';
import { emailValidation, passwordValidation } from '../controllers/validation-email-password.js';

const changeHash = (hash) => {
  location.hash = hash;
};

export const signInOnSubmit = () => {
  const txtEmail = document.querySelector('#txt-email').value;
  const txtPassword = document.querySelector('#txt-password').value;
  console.log(signIn(txtEmail, txtPassword));
  if (emailValidation && passwordValidation) {
    signIn(txtEmail, txtPassword).then(() => {       
      changeHash('/home');
    })
      .catch(() => {});
  } else {
    alert('No se pudo iniciar sesión');
  } 
};
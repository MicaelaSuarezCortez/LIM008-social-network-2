import {signUp} from '../controllers/controller-firebase.js';
import {emailValidation, passwordValidation} from '../controllers/validation-email-password.js';

const changeHash = (hash) => {
  location.hash = hash;
};

export const signUpOnSubmit = () => {  
  const txtEmail = document.querySelector('#txt-email').value;
  const txtPassword = document.querySelector('#txt-password').value;
 
  if (!emailValidation(txtEmail)) {
    document.getElementById('span-email-error').innerHTML = 'Email inválido';
  }
  if (!passwordValidation(txtPassword)) {
    document.getElementById('span-pass-error').innerHTML = 'Password inválido'; 
  } else {  
    signUp(txtEmail, txtPassword)      
      .then(() => changeHash('/signIn'))
      .catch(() => {});
  } 
}; 

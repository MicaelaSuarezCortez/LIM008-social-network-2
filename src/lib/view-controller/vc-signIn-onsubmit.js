import {signIn} from '../controllers/controller-firebase.js';
import {validateEmail} from '../controllers/validation-signin.js';

const changeHash = (hash) => {
  location.hash = hash;
};

export const signInOnSubmit = () => {
  const txtEmail = document.querySelector('#txt-email').value;
  const txtPassword = document.querySelector('#txt-password').value;
  console.log(signIn(txtEmail, txtPassword));
  if (validateEmail) {
    signIn(txtEmail, txtPassword).then(() => { 
      console.log('hola');
      changeHash('/home');
    })
      .catch(() => {});
  } else {
    alert('No se pudo iniciar sesión');
  } 
};
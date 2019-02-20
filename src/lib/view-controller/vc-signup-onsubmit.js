import {signUp} from '../controllers/controller-firebase.js';

const changeHash = (hash) => {
  windows.location.hash = hash;
};

export const signUpOnSubmit = () => {
  const txtName = document.querySelector('#txt-name').value;
  const txtEmail = document.querySelector('#txt-email').value;
  const txtPassword = document.querySelector('#txt-password').value;
  signUp(txtName, txtEmail, txtPassword)
    .then(() => changeHash('/signIn'))
    .catch(() => {});
};
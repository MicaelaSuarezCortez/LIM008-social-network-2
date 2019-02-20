import {signIn} from '../controllers/controller-firebase';

const changeHash = (hash) => {
  windows.location.hash = hash;
};

export const signInOnSubmit = () => {
  const txtEmail = document.querySelector('#txt-email').value;
  const txtPassword = document.querySelector('#txt-password').value;
  signIn(txtEmail, txtPassword)
    .then(() => changeHash('/home'))
    .catch(() => {});
};
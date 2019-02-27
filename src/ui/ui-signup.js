import { signUpOnSubmit } from '../lib/view-controller/vc-signup-onsubmit.js';

export const viewSignUp = {
  signUp: () => {
    const formElement = document.createElement('form');
    const formContent = 
      `<div>      
        <h3 class="title-form">Registro</h3>
        <div class="input-content"> 
          <span id='span-email-error'></span>
          <input type="text" placeholder="correo" id="txt-email"></input>
          <span id='span-pass-error'></span>       
          <input type="password" placeholder="contraseña" id="txt-password"></input> 
        </div>
        <div class="buttom-content">            
        <button type= "button" id="btn-sign-up" class="button-form">Registrarme</button>
        <button type= "button" id="btn-sign-in" class="button-form">Iniciar Sesión</button>        
       </div>`;
    formElement.setAttribute('id', 'form-register');
    formElement.innerHTML = formContent;

    // selecting element DOM
    const btnSignIn = formElement.querySelector('#btn-sign-in');
    btnSignIn.addEventListener('click', () => {
      window.location.hash = '#/signIn';
    });
    const btnSignUp = formElement.querySelector('#btn-sign-up');
    btnSignUp.addEventListener('click', signUpOnSubmit);    
    return formElement;
  }  
};
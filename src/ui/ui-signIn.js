import { signInOnSubmit } from '../lib/view-controller/vc-signIn-onsubmit.js';

export const viewSignIn = {
  signIn: () => {
    const formElement = document.createElement('form');
    const formContent = 
      ` <h3 class="title-form">Inicio Sesión</h3>
        <div class="input-content">
          <span id='span-email-error'></span>  
          <input type="text" placeholder = "correo" id="txt-email"></input> 
          <span id='span-pass-error'></span>  
          <input type="password" placeholder = "contraseña" id="txt-password"></input> 
        </div>  
        <div class="buttom-content">   
        <button type= "button" id="btn-sign-in" class="button-form">Iniciar Sesión</button>  
        <button type= "button" id="btn-sign-up" class="button-form">Registrarme</button>               
        </div> `;
    formElement.setAttribute('id', 'form-sign-in');
    formElement.innerHTML = formContent;

    // selecting element DOM
    const btnSignUp = formElement.querySelector('#btn-sign-up');
    btnSignUp.addEventListener('click', () => {
      window.location.hash = '#/signUp';
    });
    const btnSignIn = formElement.querySelector('#btn-sign-in');
    btnSignIn.addEventListener('click', signInOnSubmit);
    return formElement;
  }  
};
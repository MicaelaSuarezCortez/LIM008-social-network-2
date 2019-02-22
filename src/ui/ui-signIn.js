import { signInOnSubmit } from '../lib/view-controller/vc-signIn-onsubmit.js';

export const viewSignIn = {
  signIn: () => {
    const formElement = document.createElement('form');
    const formContent = 
      `<div>      
        <h3>Inicio Sesión</h3>
        <div>
          <input type="text" background = "correo" id="txt-email"></input> 
          <label for= "txt-email">Correo</label>   
        </div>
        <div>       
          <input type="password" background = "contraseña" id="txt-password"></input> 
          <label for= "txt-password">Contraseña</label>   
        </div>      
        <button type= "button" id="btn-sign-up"><img src = "" alt = "registrarme">Registrarme</button>
        <button type= "button" id="btn-sign-in"><img src = "" alt = "iniciar sesion">Iniciar Sesión</button>        
       </div>`;
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
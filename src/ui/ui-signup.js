import { signUpOnSubmit } from '../lib/view-controller/vc-signup-onsubmit.js';

export const viewSignUp = {
  signUp: () => {
    const formElement = document.createElement('form');
    const formContent = 
      `<div>      
        <h3>Regístrate</h3>
        <div>        
          <input type="text" placeholder="Nombre" id="txt-name" required></input>
          <label for= "txt-name">Nombre</label>   
        </div>    
        <div>
          <input type="text" placeholder="correo" id="txt-email" required></input> 
          <label for= "txt-email">Correo</label>   
        </div>
        <div>       
          <input type="password" placeholder="contraseña" id="txt-password" required></input> 
          <label for= "txt-password">Contraseña</label>   
        </div>             
        <div>
          <input type="password" placeholder="confirmar contraseña" id="txt-confirm-password"></input>  
          <label for= "txt-confirm-password">Confirmar Contraseña</label>      
        </div>
        <button type= "button" id="btn-sign-up"><img src = "" alt = "registrarme">Registrarme</button>
        <button type= "button" id="btn-sign-in"><img src = "" alt = "iniciar sesion">Iniciar Sesión</button>        
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
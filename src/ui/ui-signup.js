import { signUpOnSubmit } from '../lib/view-controller/vc-signup-onsubmit.js';

export const viewSignUp = {
  signUp: () => {
    const divContentFormRegister = document.createElement('div');
    const formContent = 
      `<form class="content-form">      
        <h1 class="title-form">Registro</h1>
        <p class="logo"><img src="https://user-images.githubusercontent.com/45082005/53652332-a3689d00-3c16-11e9-8f89-a331ea809d21.png" alt="vital-logo"></p>  
          <span id='span-email-error'></span>
          <input type="text" placeholder="correo" id="txt-email"></input>
          <span id='span-pass-error'></span>       
          <input type="password" placeholder="contraseña" id="txt-password"></input>        
        <div class="content-button">            
        <button type= "button" id="btn-sign-up">Registrarme</button>
        <button type= "button" id="btn-sign-in">Iniciar Sesión</button>        
       </div>
       </form>`;
    divContentFormRegister.setAttribute('id', 'div-content-form-signup');
    divContentFormRegister.innerHTML = formContent;

    // selecting element DOM
    const btnSignIn = divContentFormRegister.querySelector('#btn-sign-in');
    btnSignIn.addEventListener('click', () => {
      window.location.hash = '#/signIn';
    });
    const btnSignUp = divContentFormRegister.querySelector('#btn-sign-up');
    btnSignUp.addEventListener('click', signUpOnSubmit);    
    return divContentFormRegister;
  }  
};
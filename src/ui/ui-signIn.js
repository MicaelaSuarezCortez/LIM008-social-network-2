import { signInOnSubmit } from '../lib/view-controller/vc-signIn-onsubmit.js';

export const viewSignIn = {
  signIn: () => {
    const divContentForm = document.createElement('div');
    const formContent = 
      ` <form class="content-form">
        <h1>Bienvenidx a Vital</h1>
        <p class="logo"><img src="images/logo.png"></p>                
          <span id='span-email-error'></span>  
          <input type="text" placeholder = "correo" id="txt-email"></input>                   
          <span id='span-pass-error'></span>  
          <input type="password" placeholder = "contraseña" id="txt-password"></input> 
        <div class="content-button">        
        <button type= "button" id="btn-sign-in">Iniciar Sesión</button>  
        <button type= "button" id="btn-sign-up">Registrarme</button>               
       </div></form>`;
    divContentForm.setAttribute('id', 'div-content-form-signin');
    divContentForm.innerHTML = formContent;

    // selecting element DOM
    const btnSignUp = divContentForm.querySelector('#btn-sign-up');
    btnSignUp.addEventListener('click', () => {
      window.location.hash = '#/signUp';
    });
    const btnSignIn = divContentForm.querySelector('#btn-sign-in');
    btnSignIn.addEventListener('click', signInOnSubmit);
    return divContentForm;
  }  
};
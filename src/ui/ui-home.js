import { postOnSubmit } from '../lib/view-controller/vc-post-onsubmit.js';

export const viewHome = {
  home: () => {
    const divElement = document.createElement('div');
    const homeContent = 
      `<header>
       <figure></figure>
       <h1>Vital</h1>
       <span>Hola</span>
       <nav>
        <ul>
          <li>publicaciones</li>
          <li>Salir</li> 
        </ul>
       </nav>
       </header>
       <main>
        <div>
          <form>          
            <textarea rows ="8" cols ="40" id="txta-content-post"></textarea>
            <span id="span-content-post-error"></span>
            <button type="button" id="btn-post">Publicar</button>
          </form>
        </div>
        <section id="list-post"></section>
        </main>`;
    divElement.setAttribute('id', 'div-container');
    divElement.innerHTML = homeContent;
   
    // selecting element DOM   
    const btnPost = divElement.querySelector('#btn-post');
    btnPost.addEventListener('click', postOnSubmit);    
    return divElement;
  }};  


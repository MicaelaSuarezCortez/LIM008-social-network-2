import { postOnSubmit } from '../lib/view-controller/vc-post-onsubmit.js';
import { viewItemPost } from '../ui/ui-item-post.js';

export const viewHome = {
  home: (post) => {
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
            <button type="button" id="btn-add-post">Publicar</button>            
          </form>
        </div>
        <section">
        <ul id="post-list">
        </ul>
        </section>
        </main>`;
    divElement.innerHTML = homeContent;
    const btnAddPost = divElement.querySelector('#btn-add-post');
    const ul = divElement.querySelector('#post-list');
    post.forEach(posts => {
      ul.appendChild(viewItemPost(posts));
    });
    btnAddPost.addEventListener('click', postOnSubmit);     
    return divElement;
  }};  


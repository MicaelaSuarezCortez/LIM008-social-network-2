import { postOnSubmit } from '../lib/view-controller/vc-post-onsubmit.js';
import { viewItemPost } from '../ui/ui-item-post.js';

export const viewHome = {
  home: (post) => {
    const divElement = document.createElement('div');
    const homeContent = 
      `<header>               
          <nav class="menu"> 
            <div class="menu-items"><a href="#/home"><img src="images/logo-1.png" alt="logo"></a></div>
            <div class="menu-items"><a href="#/home">Publicaciones</a></div>
            <div class="menu-items"><a href="#">Salir</a></div>              
          </nav>              
        </header>     
       <main>
        <div class="div-content-add-post">
          <form> 
            <div class="span-content-post-error"><span id="span-content-post-error"></span></div>                    
            <div class="txta-content-post"><textarea rows ="8" cols ="40" id="txta-content-post" placeholder="¿Qué estás pensando?"></textarea></div>           
            <div class="btn-add-post"><button type="button" id="btn-add-post">Publicar</button></div>            
          </form>
        </div>
        <section>
        <ul id="post-list">
        </ul>
        </section>
        </main>`;
    divElement.setAttribute('id', 'div-content-home');
    divElement.innerHTML = homeContent;
    const btnAddPost = divElement.querySelector('#btn-add-post');
    const ul = divElement.querySelector('#post-list');
    post.forEach(posts => {
      ul.appendChild(viewItemPost(posts));
    });
    btnAddPost.addEventListener('click', postOnSubmit);     
    return divElement;
  }};  


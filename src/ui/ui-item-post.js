import { deleteObjPost} from '../lib/view-controller/vc-post-delete.js';
import { updateObjPost} from '../lib/view-controller/vc-post-update.js';

export const viewItemPost = (post) => {  
  const liElement = document.createElement('li');
  liElement.innerHTML = `
    <textarea id='textarea-post-${post.id}'>${post.content}</textarea>
    <div>
    <button type="button" id="btn-deleted-${post.id}">Eliminar</button>
    <button type="button" id="btn-edit-${post.id}">Editar</button>;
    <button type="button" id="btn-save-${post.id}">Guardar</button>;
    </div>`;
  // agregando evento de click al btn eliminar una post
  liElement.querySelector(`#btn-deleted-${post.id}`).addEventListener('click', () => deleteObjPost(post));

  // agregando evento click al btn para actualizar post
    
  liElement.querySelector(`#btn-edit-${post.id}`).addEventListener('click', () => {
    const postContent = document.querySelector(`#textarea-post-${post.id}`).value;
    updateObjPost(post.id, postContent);    
  });     
  return liElement;    
};  


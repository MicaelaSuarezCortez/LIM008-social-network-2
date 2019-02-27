import {deletePost} from '../controllers/controller-firebase.js';

export const deleteObjPost = (objPost) => { 
  if (confirm('¿Seguro que quieres eliminar tu publicación?')) 
    return deletePost(objPost.id);
};
import {deletePost} from '../controllers/controller-firebase.js';
import {confirmDelete} from '../controllers/post-delete.js';

// export const deleteObjPost = (objPost) => deletePost(objPost.id);

export const deleteObjPost = (objPost) => {
  if (deletePost(objPost.id)) {
    confirmDelete(deletePost(objPost.id));   
  } else {
    confirmDelete(!deletePost(objPost.id));
  }
};
// crear un template para confrmar delete de post:
// Crear un botón para aceptar
// Crear un botón para eliminar
// aplicar la función deleteUpdate dependiendo del caso.
// inicialmente creo que debe estar en controller: post-delete.
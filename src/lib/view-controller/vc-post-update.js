import { updatePost } from '../controllers/controller-firebase.js';

export const updateObjPost = (post, contenido) => console.log(post) || updatePost(post, contenido);
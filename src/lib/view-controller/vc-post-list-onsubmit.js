/* import {addPost} from '../controllers/controller-firebase.js';
import { postValidation } from '../controllers/post-validation.js';

const changeHash = (hash) => {
  location.hash = hash;
};

export const postOnSubmit = () => {
  const txtPost = document.querySelector('#txta-content-post').value;

  if (!postValidation(txtPost)) {
    document.getElementById('span-content-post-error').innerHTML = 'Agrega contenido a tu post';
    console.log(txtPost);
  } else {  
    addPost(txtPost)      
      .then(() => changeHash('/home'))
      .catch(() => {});
  } 
}; */
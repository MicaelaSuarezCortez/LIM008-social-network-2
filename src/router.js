import {viewSignUp} from './ui/ui-register.js';
import {viewSignIn} from './ui/ui-signIn.js';
import {viewHome} from './ui/ui-home.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/signIn');
  } else if (hash === '#/signIn' || hash === '#/home' || hash === '#/signUp') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/signIn');
  }
};
  
const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (router) {
  case 'home':
    root.appendChild(viewHome.home());      
    break;
  case 'signIn':
    root.appendChild(viewSignIn.signIn());
    break;
  case 'signUp':
    root.appendChild(viewSignUp.signUp());
    break;
  default:
    root.appendChild(viewSignIn.signIn());
    break;
  }
};
  
export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};

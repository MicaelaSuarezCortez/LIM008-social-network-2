// This is the entry point  of your application
// Initializing firebase

import {initRouter} from './router.js';
const initFirebase = () => {
  const config = {
    apiKey: 'AIzaSyB1kVKObrTjwUwQaUVReKSa0oEMTxTysu0',
    authDomain: 'vital-e4775.firebaseapp.com',
    databaseURL: 'https://vital-e4775.firebaseio.com',
    projectId: 'vital-e4775',
    storageBucket: 'vital-e4775.appspot.com',
    messagingSenderId: '1025458476369'
  };
  firebase.initializeApp(config);

  initRouter();
};

window.onload = initFirebase();
export const authStateChanged = (userEmail) => firebase.auth().onAuthStateChanged((userEmail));
export const signUp = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
export const addUser = (email, password) => firebase.firestore().collection('user').add({
  emailUser: email,
  passwordUser: password
});

export const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
export const addPost = (contentPost) => firebase.firestore().collection('post').add({
  // uid: uidUser,
  // name: nameUser,
  content: contentPost,       
  // date: firebase.firestore.FieldValue.serverTimestamp()  
}); 

export const getPost = (callback) =>
  firebase.firestore().collection('post')
    // .orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });        
      });
      callback(data);
    }); 

export const deletePost = (idPost) => firebase.firestore().collection('post').doc(idPost).delete();
export const updatePost = (idPost, contentPost) => firebase.firestore().collection('post').doc(idPost).update({
  content: contentPost
});
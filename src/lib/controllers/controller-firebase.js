export const signUp = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
export const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
export const addPost = (contentPost) => firebase.firestore().collection('post').add({
  // uid: uidUser,
  // name: nameUser,
  content: contentPost,       
  // date: firebase.firestore.FieldValue.serverTimestamp()  
}); 

export const getPost = (callback) =>
  firebase.firestore().collection('post')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });        
      });
      callback(data);
    }); 

export const deletePost = (idPost) =>
  firebase.firestore().collection('post').doc(idPost).delete();
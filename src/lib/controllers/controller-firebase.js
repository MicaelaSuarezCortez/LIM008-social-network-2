export const signUp = (name, email, password) => {
  firebase.auth().createUserWithEmailAndPassword(name, email, password);
};

export const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);


export const signUp = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
export const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);


// configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

// iniciando tests

import { signIn } from '../src/lib/controllers/controller-firebase';

describe('lista de notas', () => {
  it('Debería poder iniciar sesion', () => {
    return signIn('mica19@hotmail.com', '123456')
      .then((user) => {
        expect(user.email).toBe('mica19@hotmail.com');
      });
  });
});

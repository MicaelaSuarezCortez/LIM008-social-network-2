// importando MockFirebase desde la dependencia que instalé
import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        abc1d: {
        // uid: 'DAw6hiqMgobpE4nq3a4EPk05Kkv1',
        // name: 'Micaela Suarez',
          content: 'Mi lenguajes de programación favorito: JavaScript',
        //  date: '24 de febrero de 2019, 18:54:36 UTC-5',         
        },
        abc2d: {
        //  uid: 'Po5LLHWdP2Xm9dxXhJOXPP0gwRE2',
        //  name: 'Bety Davila',
          content: 'Hola Laboratoria',
          //  date: '24 de febrero de 2019, 15:30:36 UTC-4',              
         
        },
      }
    }
  }
};

// para que de manera global firebase sea reemplazado por el MockFirebase(firebase falso)
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import {addPost, getPost, deletePost, updatePost} from '../src/lib/controllers/controller-firebase.js';

describe('lista de post', () => {
  it('Debería porder agregar un post', (done) => {
    return addPost('Mi lenguajes de programación favorito: JavaScript') 
      .then(() => getPost((data) => {
        const result = data.find((post) => post.content === 'Mi lenguajes de programación favorito: JavaScript');
        expect(result.content).toBe('Mi lenguajes de programación favorito: JavaScript');
        done();
      }
      ));
  });
  it('Debería poder eliminar un post', (done) => {
    return deletePost('abc1d')
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.id === 'abc1d');
          expect(result).toBe(undefined);
          done();
        }
      ));
  });
  it('Debería poder actualizar un post', (done) => {
    return updatePost('abc2d', 'Laboratoria')
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.id === 'abc2d');
          expect(result.content).toBe('Laboratoria');
          done();
        }
      ));
  });
});
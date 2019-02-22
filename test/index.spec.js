// importamos la funcion que vamos a testear
import { emailValidation, passwordValidation } from '../src/lib/controllers/validation-email-password.js';

describe('emailValidation', () => {
  it('debería ser una función', () => {
    expect(typeof emailValidation).toBe('function');
  });
});

describe('emailValidation', () => {
  it('debería validar si email es vacío y si tiene @ y .com', () => {
    expect(emailValidation('mica19@hotmail.com').toBe(true));
  });
});

describe('passwordValidation', () => {
  it('Debería validar si password es < 6', () => {
    expect(passwordValidation('12345').toBe(false));
  });
});
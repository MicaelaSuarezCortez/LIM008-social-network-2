// importamos la funcion que vamos a testear
import { emailValidation, passwordValidation } from '../src/lib/controllers/validation-email-password.js';

describe('emailValidation', () => {
  it('debería ser una función', () => {
    expect(typeof emailValidation).toBe('function');
  });
});

describe('emailValidation', () => {
  it('debería retornar true con el email mica19@hotmail.com', () => {
    expect(emailValidation('mica19@hotmail.com')).toBe(true);
  });
  it('debería  retornar false con el email mica19hotmail.com', () => {
    expect(emailValidation('mica19hotmail.com')).toBe(false);
  });
});

describe('passwordValidation', () => {
  it('Debería validar si password es < 6', () => {
    expect(passwordValidation('12345')).toBe(false);
  });
  it('Debería validar si password es >= 6', () => {
    expect(passwordValidation('123456')).toBe(true);
  });
});
// Function for validation email

export const emailValidation = (email) => {
  const regex = /\S+@\S+\.\S+/; 
  return regex.test(email) ? true : false;
};

// Function for valdation password

export const passwordValidation = (password) => {  
  if ((password.length <= 6) || (password = ''))
    return false;
  else return true;  
};
// Function for validation Email

export const validateEmail = (email) => {
  console.log(email);
  
  const regex = /\S+@\S+\.\S+/; 
  if (regex.test(email)) {
    alert('El email es correcto');
    return true;
  } else {
    alert('El email no es correcto'); 
    return false;
  };
};

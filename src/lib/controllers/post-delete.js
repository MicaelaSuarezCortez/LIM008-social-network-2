export const confirmDelete = () => {     
  let confirmar = confirm('Pulsa sobre las siguientes opciones');
  if (confirmar)
    alert('Seleccionaste aceptar');
  else
    alert('Seleccionaste cancelar');
};  

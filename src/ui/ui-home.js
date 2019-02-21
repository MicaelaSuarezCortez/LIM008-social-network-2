export const viewHome = {
  home: () => {
    const divElement = document.createElement('div');
    const homeContent = 
      `
       <h1>Welcome</h1> `;
    divElement.setAttribute('id', 'div-container');
    divElement.innerHTML = homeContent;
    return divElement;
    // selecting element DOM
  }     
};
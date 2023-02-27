 
  // Obtener el botón y el contenedor de información adicional

const btnInfo = document.getElementById('btn-info');
const infoAdicional = document.getElementById('informacion-adicional');

// Agregar un evento click al botón

btnInfo.addEventListener('click', () => {
  // Crear un elemento de párrafo para la información adicional
  
  const parrafo = document.createElement('p');
  parrafo.innerText = 'Mi información adicional es: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus tristique magna, a lacinia nisl fringilla ac. Proin euismod arcu ac risus elementum, non bibendum arcu venenatis.';

  // Agregar el elemento de párrafo al contenedor de información adicional
  info.appendChild(parrafo);
});

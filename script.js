// Se agregó la función para mostrar un mensaje cuando se alcanza el límite de caracteres
const opinion = document.querySelector('#opinion');
const mensaje = document.querySelector('.mensaje-caracteres');

opinion.addEventListener('input', () => {
  const caracteresRestantes = 560 - opinion.value.length;

  if (caracteresRestantes < 0) {
    mensaje.classList.add('visible');
    mensaje.textContent = `Has superado el límite de caracteres. Por favor, elimina ${Math.abs(caracteresRestantes)} caracteres.`;
  } else {
    mensaje.classList.remove('visible');
  }
});

// Se agregó la función para validar el formulario
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const opinion = document.querySelector('#opinion').value;

  // Puedes agregar aquí código para procesar la opinión del usuario

  alert('Tu opinión ha sido enviada.');
});

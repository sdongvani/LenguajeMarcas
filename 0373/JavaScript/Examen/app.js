document.getElementById('generarCaixes').addEventListener('click', function () {
  const numCaixes = parseInt(prompt('Quantes caixes vols generar?'));

  if (!isNaN(numCaixes)) {
    const contenidor = document.getElementById('contenidor');
    contenidor.innerHTML = ''; // Borrar contenido previo

    for (let i = 1; i <= numCaixes; i++) {
      const caixa = document.createElement('div');
      caixa.style.width = '150px';
      caixa.style.height = '150px';
      caixa.style.border = '1px solid black';
      caixa.style.display = 'inline-block';
      caixa.style.margin = '10px';
      caixa.style.textAlign = 'center';
      caixa.style.lineHeight = '150px';

      if (i % 2 === 0) {
        caixa.style.backgroundColor = '#e0e0e0';
        caixa.classList.add('parell');
      } else {
        caixa.style.backgroundColor = '#d0d0d0';
        caixa.classList.add('imparell');
      }

      // Añade el contenido de la caja
      caixa.textContent = `Caixa ${i}`;

      contenidor.appendChild(caixa);
    }
  } else {
    alert('Por favor, introduce un número válido.');
  }
});

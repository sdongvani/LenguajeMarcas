Read the exercises and I'll implement the JavaScript solutions for each one.

## Exercise 1 - Password Generator

```html
<!DOCTYPE html>
<html lang="ca">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercici 1 - Generador de contrasenyes</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      #resultat {
        margin-top: 20px;
        padding: 15px;
        background-color: #f0f0f0;
        border: 2px solid #ccc;
        border-radius: 5px;
        font-size: 18px;
        font-family: monospace;
        word-break: break-all;
      }
      button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 5px;
      }
      button:hover {
        background-color: #45a049;
      }
    </style>
  </head>
  <body>
    <h1>Generador de contrasenyes</h1>
    <button onclick="generarContrasenya()">Generar Contrasenya</button>
    <div id="resultat"></div>

    <script>
      // 1. Definir variables amb els possibles caràcters
      const lletres = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
      const numeros = '0123456789';
      const especials = '!@#$%^&*()_+';

      // 2. Definir quantitats
      const numLletres = 8;
      const numNumeros = 4;
      const numEspecials = 2;

      // Funció per obtenir un caràcter aleatori d'una cadena
      function getRandomChar(caracters) {
        const index = Math.floor(Math.random() * caracters.length);
        return caracters[index];
      }

      // Funció per generar una cadena aleatòria de longitud especificada
      function generarPart(caracters, longitud) {
        let resultat = '';
        for (let i = 0; i < longitud; i++) {
          resultat += getRandomChar(caracters);
        }
        return resultat;
      }

      // Funció principal per generar la contrasenya
      function generarContrasenya() {
        // 3. Generar cada part seguint l'ordre especificat
        const partLletres = generarPart(lletres, numLletres);
        const partNumeros = generarPart(numeros, numNumeros);
        const partEspecials = generarPart(especials, numEspecials);

        // Unir totes les parts
        const contrasenya = partLletres + partNumeros + partEspecials;

        // 4. Mostrar la contrasenya al DIV
        document.getElementById('resultat').innerHTML =
          `<strong>Contrasenya generada:</strong> ${contrasenya}`;
      }

      // Generar una contrasenya per defecte en carregar la pàgina
      window.onload = generarContrasenya;
    </script>
  </body>
</html>
```

## Exercise 2 - Box Generator

```html
<!DOCTYPE html>
<html lang="ca">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercici 2 - Generador de caixes</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }

      .caixa {
        width: 200px;
        padding: 20px;
        margin: 10px;
        text-align: center;
        font-weight: bold;
        border-radius: 5px;
        display: inline-block;
      }

      .parell {
        background-color: #90ee90;
        border: 2px solid #228b22;
        color: #006400;
      }

      .imparell {
        background-color: #ffb6c1;
        border: 2px solid #dc143c;
        color: #8b0000;
      }

      button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        background-color: #2196f3;
        color: white;
        border: none;
        border-radius: 5px;
        margin-bottom: 20px;
      }

      button:hover {
        background-color: #0b7dda;
      }

      #contenidor {
        border: 2px dashed #ccc;
        padding: 20px;
        min-height: 200px;
        border-radius: 5px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <h1>Generador de caixes</h1>
    <button onclick="generarCaixes()">Generar caixes</button>
    <div id="contenidor"></div>

    <script>
      // 1. Definir variable numCaixes
      function generarCaixes() {
        let numCaixes = prompt('Quantes caixes vols generar?', '5');

        // Validar que és un número vàlid
        if (numCaixes === null || numCaixes === '') {
          return;
        }

        numCaixes = parseInt(numCaixes);

        if (isNaN(numCaixes) || numCaixes <= 0) {
          alert('Si us plau, introdueix un número vàlid major que 0.');
          return;
        }

        const contenidor = document.getElementById('contenidor');
        // Netejar el contenidor abans de generar noves caixes
        contenidor.innerHTML = '';

        // 2-4. Generar les caixes
        for (let i = 1; i <= numCaixes; i++) {
          // Crear el div
          const caixa = document.createElement('div');

          // Afegir la classe comuna .caixa
          caixa.classList.add('caixa');

          // Afegir la classe segons la posició (parell o imparell)
          if (i % 2 === 0) {
            caixa.classList.add('parell');
          } else {
            caixa.classList.add('imparell');
          }

          // 3. Afegir el contingut "Caixa X"
          caixa.textContent = `Caixa ${i}`;

          // Afegir la caixa al contenidor
          contenidor.appendChild(caixa);
        }
      }
    </script>
  </body>
</html>
```

## Exercise 3 - Enemy Generator

```html
<!DOCTYPE html>
<html lang="ca">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercici 3 - Generador d'enemics</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
        position: relative;
        min-height: 100vh;
      }

      .enemic {
        position: absolute;
        width: 120px;
        padding: 15px;
        background-color: #ff4444;
        color: white;
        text-align: center;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s;
        border: 2px solid #8b0000;
      }

      .enemic:hover {
        transform: scale(1.05);
        background-color: #ff0000;
      }

      button {
        padding: 12px 24px;
        font-size: 16px;
        cursor: pointer;
        background-color: #ff5722;
        color: white;
        border: none;
        border-radius: 5px;
        margin-bottom: 20px;
        font-weight: bold;
      }

      button:hover {
        background-color: #e64a19;
      }

      .info {
        margin-top: 20px;
        padding: 10px;
        background-color: #f0f0f0;
        border-radius: 5px;
      }

      #contenidor-enemics {
        position: relative;
        min-height: 500px;
        border: 2px solid #ddd;
        border-radius: 5px;
        margin-top: 20px;
        background-color: #f9f9f9;
      }
    </style>
  </head>
  <body>
    <h1>Generador d'enemics</h1>
    <button onclick="generarEnemic()">Generar enemic</button>
    <div class="info"><strong>Info:</strong> Fes clic sobre un enemic per eliminar-lo!</div>
    <div id="contenidor-enemics"></div>

    <script>
      let contadorEnemics = 0;

      // Funció per obtenir una posició aleatòria
      function getRandomPosition() {
        const contenidor = document.getElementById('contenidor-enemics');
        const maxWidth = contenidor.clientWidth - 150; // 150px és l'amplada aproximada de l'enemic
        const maxHeight = contenidor.clientHeight - 70; // 70px és l'alçada aproximada

        const x = Math.random() * maxWidth;
        const y = Math.random() * maxHeight;

        return { x: Math.max(0, x), y: Math.max(0, y) };
      }

      // Funció per generar un nou enemic
      function generarEnemic() {
        // Incrementar el contador
        contadorEnemics++;

        // Crear el div de l'enemic
        const enemic = document.createElement('div');
        enemic.className = 'enemic';
        enemic.textContent = `Enemic ${contadorEnemics}`;

        // Posicionar aleatòriament
        const posicio = getRandomPosition();
        enemic.style.left = posicio.x + 'px';
        enemic.style.top = posicio.y + 'px';

        // Afegir event listener per eliminar l'enemic al fer clic
        enemic.addEventListener('click', function (e) {
          e.stopPropagation(); // Evitar propagació per si de cas
          this.remove(); // Eliminar l'enemic del DOM
        });

        // Afegir l'enemic al contenidor
        document.getElementById('contenidor-enemics').appendChild(enemic);
      }

      // Opcional: Afegir estils per al contenidor perquè sigui visible
      window.onload = function () {
        const contenidor = document.getElementById('contenidor-enemics');
        contenidor.style.height = '500px';
        contenidor.style.position = 'relative';
        contenidor.style.overflow = 'hidden';
      };
    </script>
  </body>
</html>
```

## Resum dels tres exercicis:

1. **Generador de contrasenyes**: Genera contrasenyes amb 8 lletres, 4 números i 2 caràcters especials, mostrant el resultat en un DIV.

2. **Generador de caixes**: Crea dinàmicament un número determinat de caixes (preguntat a l'usuari) amb classes CSS diferenciades per parells/senars i les mostra dins d'un contenidor.

3. **Generador d'enemics**: Permet generar enemics que apareixen en posicions aleatòries. Cada enemic pot ser eliminat fent clic sobre ell.

Tots tres exercicis compleixen els requisits especificats i estan llestos per funcionar en qualsevol navegador modern.

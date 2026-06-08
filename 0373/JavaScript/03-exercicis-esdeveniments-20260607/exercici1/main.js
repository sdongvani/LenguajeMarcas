// ============================================
// 🎓 TUTORIAL: ESDEVENIMENTS INTERACTIUS
// ============================================
// 🎯 OBJECTIU: Aprendre a utilitzar ESDEVENIMENTS per fer jocs interactius
//
// 📚 QUÈ APRENDRÀS:
// - Com afegir esdeveniments de click als botons
// - Com crear funcions que responen a accions de l'usuari
// - Com actualitzar el DOM dinàmicament segons l'usuari interactua
// - Com fer un sistema de combat complet i interactiu
//
// ============================================

// ============================================
// PART 1: QUÈ SÓN ELS ESDEVENIMENTS?
// ============================================

// CONCEPTE CLAU: ESDEVENIMENTS
//
// Fins ara, tot el teu codi s'executava automàticament quan carregaves la pàgina.
// Però els JOCS necessiten INTERACCIÓ DE L'USUARI perquè aquest evolucioni.
//
// Els ESDEVENIMENTS permeten que el teu codi "escolti" accions de l'usuari:
// - Click del ratolí
// - Tecles premudes
// - Text escrit en un input
// - I moltes coses més!
//
// SINTAXI BÀSICA:
// element.addEventListener('click', funcio);
//
// - element: l'element HTML que volem "escoltar"
// - 'click': el tipus d'esdeveniment
// - funcio: el codi que s'executa quan passa l'esdeveniment

// ============================================
// PART 1: VARIABLES DEL JOC
// ============================================

// Stats del jugador
let vidaJugador = 100;
const vidaMaximaJugador = 100;
const atacJugador = 25;
let pocionsJugador = 3;

// Stats de l'enemic
let vidaEnemic = 120;
let vidaMaximaEnemic = 120;
let atacEnemic = 20;
let pocionsEnemic = 3;

// Estadístiques de la batalla
let tornsTotals = 0;
let danyCausat = 0;
let danyRebut = 0;
let pocionsUtilitzades = 0;

// ============================================
// PART 2: FUNCIONS PER ACTUALITZAR INFORMACIÓ DEL COMBAT
// ============================================

// Funció per actualitzar les barres de vida del Jugador i l'Enemic
function actualitzarBarresVida() {
  const percentatgeJugador = (vidaJugador / vidaMaximaJugador) * 100;
  const percentatgeEnemic = (vidaEnemic / vidaMaximaEnemic) * 100;

  document.querySelector('#vida-jugador').textContent = vidaJugador;
  document
    .querySelector('#vida-jugador-barra')
    .style.setProperty('width', `${percentatgeJugador}%`);

  document.querySelector('#vida-enemic').textContent = vidaEnemic;
  document.querySelector('#vida-enemic-barra').style.setProperty('width', `${percentatgeEnemic}%`);
}

// Funció per actualitzar stats (SECCIÓ ESTADÍSTIQUES DE BATALLA)
function actualitzarStats() {
  document.querySelector('#pocions-jugador').textContent = pocionsJugador;
  document.querySelector('#torns-total').textContent = tornsTotals;
  document.querySelector('#dany-causat').textContent = danyCausat;
  document.querySelector('#dany-rebut').textContent = danyRebut;
  document.querySelector('#pocions-utilitzades').textContent = pocionsUtilitzades;
}

// Funció per generar dany aleatori
function generarDany(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ============================================
// PART 3: ESDEVENIMENTS ALS BOTONS
// ============================================

// AQUÍ COMENÇA LA MÀGIA DELS ESDEVENIMENTS!
//
// El codi de les funcions EventListener NOMÉS s'executarà quan l'usuari faci click al botó corresponent.

// ============================================
// ESDEVENIMENT 1: BOTÓ ATACAR
// ============================================

// PAS 1: Seleccionar el botó d'atacar
const btnAtacar;

// PAS 2: Afegir l'esdeveniment
// Quan l'usuari faci click en aquest botó, s'executarà aquesta funció
btnAtacar.addEventListener('click', () => {
  console.log('⚔️ Botó ATACAR premut!');
  //Torn del Jugador
  //1. danyJugador = Cridar a la funció generarDany(25,30)
  let danyJugador;

  //2. Resta a vidaEnemic el danyJugador obtingut

  //3. Acumula a la variable danyCausat el danyJugador del torn actual

  //4. Crida a les funcions que actualitzen les Barres de Vida i els Stats
  //actualitzarBarresVida() i actualitzarEstats()

  //Torn de l'enemic
  //5. danyEnemic = Crida a la funció generarDany(20,25)
  let danyEnemic;

  //6. Resta a vidaJugador el danyEnemic obtingut

  //7. Acumula a la variable danyRebut el danyEnemic del torn actual

  //8. Crida a les funcions que actualitzen les Barres de Vida i els Stats
  //actualitzarBarresVida() i actualitzarEstats()
  setTimeout(() => {
    // Crida a les funcions aquí dintre
  }, 1000);

  //9. Incrementa en 1 la variable de tornsTotals
});

// ============================================
// ESDEVENIMENT 2: BOTÓ POCIÓ
// ============================================

const btnPocio = document.querySelector('#btn-pocio');
const curar = 40;

btnPocio.addEventListener('click', () => {
  console.log('🧪 Botó POCIÓ premut!');
  //Torn del Jugador
  // 1. Comprovar si tens pocionsJugador per consumir
  // 2. Si tens pocions sumar a vidaJugador la variable "curar" (40 punts).
  // 3. Comprovar que al curar-te no es supera la vidaMaximaJugador
  // 4. Actualitzar les variables d'estadístiques
  // - Incrementar en 1 pocionsUtilitzades
  // - Decrementar en 1 pocionsJugador
  // 6. Crida a les funcions que actualitzen les Barres de Vida i els Stats
  //actualitzarBarresVida() i actualitzarEstats()
  //Torn de l'enemic
  // 7. Fes que l'enemic ataqui. Tot el procés que has fet abans
  // 8. Crida a les funcions que actualitzen les Barres de Vida i els Stats
  //actualitzarBarresVida() i actualitzarEstats()
  // 9. Incrementa en 1 la variable de tornsTotals
});

// EXTRA 1: Transforma el torn d'atac del jugador en una funcio tornJugador()
// EXTRA 2: Transforma el torn d'atac de l'enemic en una funció tornEnemic()
// EXTRA 3: Fes que l'enemic si està per sota de 30 de vida prengui 1 poció.
// EXTRA 4: Fes que quan el jugador o l'enemic es quedin sense vida eliminar els listeners dels botons.

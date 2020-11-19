// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var arrayNumPc = [1,2,2,1];
var arrayNumUser = [];

// while(arrayNumPc.length < 16) {

  // var randomNumber = generateRandomNumber(1,10);
  

// }



/*---------------------- */
console.log(generateRandomNumber(1,10));
function generateRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}
 
console.log(checkNumberInArray(2,arrayNumPc));

function checkNumberInArray(number,array) {
    for ( i = 0; i < array.length; i++) {
      if (number == array[i]) {
        return true;
      } else {
        return false;
      }
    }
}

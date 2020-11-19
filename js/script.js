// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var arrayNumPc = [];
var arrayNumUser = [];


while (arrayNumPc.length < 16) {
  var randomNumber = generateRandomNumber(1,100);
  var numberChecked = checkNumberInArray(randomNumber,arrayNumPc);
  if (!numberChecked) {
    arrayNumPc.push(randomNumber);
  }
}


while (!gameOver && arrayNumUser.length < 16) {
  var userInput = parseInt(prompt('Enter a number'));
  while(userInput == 0 || userInput > 100) {
    userInput = parseInt(prompt('Enter a number between 1 & 100'));
  }

  var numberChecked = checkNumberInArray(userInput,arrayNumUser);
   while(numberChecked) {
      userInput = parseInt(prompt('Enter a number'));
      numberChecked = checkNumberInArray(userInput,arrayNumUser);
   }

   arrayNumUser.push(userInput);

  var gameOver = false;
  for ( var i = 0; i < arrayNumPc.length; i++) {
    if (userInput == arrayNumPc[i]) {
      console.log(`GameOver, bomb is number : ${userInput}`);
      console.log(`Your Score is : ${arrayNumUser.length - 1}`);
      gameOver = true;
    } 
  }
}

// Arraypc numbers
console.log(arrayNumPc); 
// Array user numbers
console.log(arrayNumUser);

if(arrayUserPc.length == 16) {
  console.log('You Win!');
}

/*----------------------------------------------------------------------------*/

function generateRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function checkNumberInArray(number,array) {
  var isInList = false;
    for ( var i = 0; i < array.length; i++) {
      if (number == array[i]) {
        return isInList = true;
      } 
    }
    return isInList;
}

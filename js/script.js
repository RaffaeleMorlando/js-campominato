var arrayNumPc = [];
var arrayNumUser = [];
var choice = '';
var result = document.getElementById('score');
var wrapperStart = document.getElementById('start');


// 1.
var startButton = document.getElementById('startButton');
startButton.addEventListener('click',
  function () {
    choices.className = 'wrapperChoices show';
  }
)

// 2.
var levelButton = document.querySelectorAll('.choice');
for (let i = 0; i < levelButton.length; i++) {
  levelButton[i].addEventListener("click", function() {
      choice = levelButton[i].innerText;
      startGame(choice);
  });
}



// RELOAD PAGE WHEN USER CLICK ON TITLE
var reloadButton = document.getElementById('title');
reloadButton.addEventListener('click',
  function () {
    window.location.reload()
  }
)

/*----------------------------------------------------------------------------*/

function generateRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function checkNumberInArray (number,array) {
  var isInList = false;
  for ( var i = 0; i < array.length; i++) {
    if (number == array[i]) {
      return isInList = true;
    } 
  }
  return isInList;
}

function chooseLevel (choice) {

  switch (choice) {
    case 'BEGINNER':
      console.log('Beginner');
      while (arrayNumPc.length < 16) {
        var randomNumber = generateRandomNumber(1,100);
        var numberChecked = checkNumberInArray(randomNumber,arrayNumPc);
        if (!numberChecked) {
          arrayNumPc.push(randomNumber);
        }
      }
      break;

    case 'MEDIUM':
      console.log('Medium');
      while (arrayNumPc.length < 16) {
        var randomNumber = generateRandomNumber(1,80);
        var numberChecked = checkNumberInArray(randomNumber,arrayNumPc);
        if (!numberChecked) {
          arrayNumPc.push(randomNumber);
        }
      }
      break;
    
    case 'HARD':
      console.log('Hard');
      while (arrayNumPc.length < 16) {
        var randomNumber = generateRandomNumber(1,50);
        var numberChecked = checkNumberInArray(randomNumber,arrayNumPc);
        if (!numberChecked) {
          arrayNumPc.push(randomNumber);
        }
      }
      break;
    
    default:
      return false;
  }

  return true;
}

function startGame (choice) {

  // var choiceMode = prompt('Enter 0 - 1 - 2 to choice difficult level');

  var ifGameStart = chooseLevel(choice);

  if (ifGameStart) {
    
    while (!gameOver && arrayNumUser.length < (100 - 16)) {

      var userInput = parseInt(prompt('Enter a number'));
      // var userInput = generateRandomNumber(1,100);
      while(userInput == 0 || userInput > 100) {
        userInput = parseInt(prompt('Enter a number between 1 & 100'));
      }
    
      var numberChecked = checkNumberInArray(userInput,arrayNumUser);
      while(numberChecked) {
        userInput = parseInt(prompt('Enter a number'));
        userInput = generateRandomNumber(1,100);
        numberChecked = checkNumberInArray(userInput,arrayNumUser);
      }
    
      arrayNumUser.push(userInput);
    
      var gameOver = false;
      for ( var i = 0; i < arrayNumPc.length; i++) {
        if (userInput == arrayNumPc[i]) {
          console.log(`GameOver, bomb is number : ${userInput}`);
          console.log(`Your Score is : ${arrayNumUser.length - 1}`);
          wrapperStart.className = "wrapperStart hidden";
          choices.className = 'wrapperChoices hidden';
          result.className = "result show";
          result.innerHTML += `<h2 class="bigRed">GameOver<h2>`;
          result.innerHTML += `<h2>Bomb is number <span class="bomb">${userInput}<span></h2>`;
          result.innerHTML += `<h2 class="totalScore">Your Score is ${arrayNumUser.length - 1}</h2>`
          gameOver = true;
        } 
      }
    }
  } else {
    alert('No mode,no party!')
  }

  // Arraypc numbers
  console.log(arrayNumPc); 
  // Array user numbers
  console.log(arrayNumUser);

  if(arrayNumUser.length == (100 - 16)) {
    console.log('You Win!');
    result.className = "result show";
    result.innerHTML = `<h2 class=""winner>You Win</h2>`
  }

}

/*------------------------------------------------------------------------ */





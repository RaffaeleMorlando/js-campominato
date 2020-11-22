var arrayNumPc = [];
var arrayNumUser = [];
var choice = '';
var result = document.getElementById('score');
var wrapperStart = document.getElementById('start');

var startButton = document.getElementById('startButton');
startButton.addEventListener('click',
  function () {
    choices.className = 'wrapperChoices show';
  }
)

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
      while (arrayNumPc.length < 16) {
        var randomNumber = generateRandomNumber(1,100);
        var numberChecked = checkNumberInArray(randomNumber,arrayNumPc);
        if (!numberChecked) {
          arrayNumPc.push(randomNumber);
        }
      }
      break;

    case 'MEDIUM':
      while (arrayNumPc.length < 16) {
        var randomNumber = generateRandomNumber(1,80);
        var numberChecked = checkNumberInArray(randomNumber,arrayNumPc);
        if (!numberChecked) {
          arrayNumPc.push(randomNumber);
        }
      }
      break;
    
    case 'HARD':
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

  var ifGameStart = chooseLevel(choice);

  if (ifGameStart) {
    
    while (!gameOver && arrayNumUser.length < (100 - 16)) {

      var userInput = parseInt(prompt('Enter a number'));
      while(userInput == 0 || userInput > 100) {
        userInput = parseInt(prompt('Enter a number between 1 & 100'));
      }
    
      var numberChecked = checkNumberInArray(userInput,arrayNumUser);
      while(numberChecked) {
        userInput = parseInt(prompt('Enter a number'));
        // userInput = generateRandomNumber(1,100);
        numberChecked = checkNumberInArray(userInput,arrayNumUser);
      }
    
      arrayNumUser.push(userInput);
    
      var gameOver = false;
      for ( var i = 0; i < arrayNumPc.length; i++) {
        if (userInput == arrayNumPc[i]) {
          wrapperStart.className = "wrapperStart hidden";
          choices.className = 'wrapperChoices hidden';
          result.className = "result show";
          result.innerHTML += `<h2 class="bigRed">GameOver<h2>`;
          result.innerHTML += `<h2><i class="fas fa-bomb"></i> is number <span class="bomb">${userInput}<span></h2>`;
          result.innerHTML += `<h2 class="totalScore">Your Score is ${arrayNumUser.length - 1}</h2>`
          gameOver = true;
        } 
      }
    }
  } else {
    alert('No level,no party!')
  }

  if(arrayNumUser.length == (100 - 16)) {
    result.className = "result show";
    result.innerHTML = `<h2 class=""winner>You Win</h2>`
  }

}

/*------------------------------------------------------------------------ */





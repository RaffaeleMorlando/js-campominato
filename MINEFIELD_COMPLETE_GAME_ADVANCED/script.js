var parentContainer = document.querySelector('.container');
var score = document.getElementById('scoreIs');
var message = document.getElementById('messageToShow');
var layover = document.querySelector('.layover');
var restart = document.getElementById('restart');
restart.addEventListener('click', 
  function () {
    window.location.reload();
  }
)


// bombs
var arrayNumPc = [];
while(arrayNumPc.length < 16) {
  var number = generateRandomNumber()
  var numberChecked = checkNumber(arrayNumPc,number);
  console.log("numberChecked", numberChecked)
  if(numberChecked == false) {
    arrayNumPc.push(number);
  }
}
console.log(arrayNumPc);

var arrayNumber = [];
while (arrayNumber.length < 100) {
  var randomNumber = generateRandomNumber();
  var checkedNumber = checkNumber(arrayNumber,randomNumber)
  if(!checkedNumber) {
    arrayNumber.push(randomNumber);
  }
}
console.log(arrayNumber);

var counterPoints = 0;
// create divs 
for (var i = 0; i < 100; i++) {
  var box = document.createElement('div');
  box.className = ('box'); 
  var boxMini = document.createElement('div');
  boxMini.className = ('hidden');
  boxMini.innerHTML = arrayNumber[i];
  box.appendChild(boxMini);
  parentContainer.appendChild(box);

  box.addEventListener('click', 
    function (e) {
      var box = e.target;
      box.className = ('whiteSmoke');
      counterPoints++;
      console.log(box);
      var boxMini = e.target.firstChild;
      boxMini.className = ('show');
      console.log(boxMini);
      for (var n = 0; n < arrayNumPc.length; n++) {
        if(parseInt(boxMini.innerText) == arrayNumPc[n]) {
          box.className = ('red');
          boxMini.innerHTML = `<i class="fas fa-bomb"></i>`;
          layover.className = ('layover show');
          message.className = ('message showSpecial');
          message.innerHTML = `GameOver`;
          // alert('BOOM!');  
          counterPoints--
        }
      }
      console.log("counterPoints", counterPoints)
      score.innerHTML = counterPoints;
    }
  )
}


/*--------------------------------------------------*/ 
function generateRandomNumber() {
  return Math.floor(Math.random() * 100 + 1)
}

function checkNumber (array,number) {
  var isInArray = false;
  for (var i = 0; i < array.length; i++) {
    if (number == array[i]) {
     return isInArray = true;
    }
  }
  return isInArray;
} 


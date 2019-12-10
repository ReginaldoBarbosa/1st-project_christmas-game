let testeee = "olaaaaaaaaBrasil"; 
// ~~~~~~~~~~~~~~~~ CANVAS PARAMETERS ~~~~~~~~~~~~~~~~~ //
const canvas = document.getElementById('christmasGame');
canvas.width = window.innerWidth;
canvas.height = window.innerWidth*0.5;
const gameX = canvas.width;
const gameY = canvas.height;
const ctx = canvas.getContext('2d');

console.log('01general.js - Working');
console.log(gameX);


// ~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~ //
let frame = 0;
let giftsInBag = 3;
let reneersLeft = 3;
let score = 0;



var gameArea = {
  
}
// ~~~~~~~~~~~~~~~~ BACKGROOUND START ~~~~~~~~~~~~~~~~~ //
//  FIXED
function bgGeneral() {
  var bgFull = new Image();
  bgFull.src = "./img/bg-fixed/bgfixed.png";
  bgFull.onload = function () {
    ctx.drawImage(bgFull, 0, 0, gameX, gameY);
  }
}
bgGeneral();
// ~~~~~~~~~~~~~~~~~~~~~ LOOP ~~~~~~~~~~~~~~~~~~~~~~~~ //
function bgLoop() {
  var bgActive = new Image();
  let loopXPosition = gameX;
  bgActive.src = "./img/bg-loop/giphy.gif";
  bgActive.onload = function () {
    ctx.drawImage(bgActive, 0 - frame, gameY * 0.6, gameX, gameY * 0.4);
    console.log(frame);
  }
}
bgLoop();
// ~~~~~~~~~~~~~~~~ BACKGROOUND END ~~~~~~~~~~~~~~~~~ //






// ~~~~~~~~~~~~~~~~ SOUND ~~~~~~~~~~~~~~~~~ //
// During the game
function bgSound() {
  const bg = new Audio ();
  bg.src = "./sound/DeckTheHalls.mp3"
  bg.play();
}
//bgSound();




// ~~~~~~~~~~~~~~~~ RANDOM FUNCTION ~~~~~~~~~~~~~~~~~ //
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



let testeee = "olaaaaaaaa";
// ~~~~~~~~~~~~~~~~ CANVAS PARAMETERS ~~~~~~~~~~~~~~~~~ //
const canvas = document.getElementById('christmasGame');
canvas.width = window.innerWidth;
canvas.height = window.innerWidth * 0.5;
const gameX = canvas.width;
const gameY = canvas.height;
const ctx = canvas.getContext('2d');

// ~~~~~~~~~~~~~~~~ SOUND ~~~~~~~~~~~~~~~~~ //
// During the game
function bgSound() {
  const bg = new Audio();
  bg.src = "./sound/DeckTheHalls.mp3"
  bg.play();
};
// bgSound();

// ~~~~~~~~~~~~~~~~ START GAME AREA ~~~~~~~~~~~~~~~~~ //
var frames = 0;
var gameArea = {
  canvas: document.getElementById('christmasGame'),
  frames: 0,
  start: function () {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerWidth * 0.5;
    this.ctx = this.canvas.getContext("2d");
    this.gameX = gameX;
    this.gameY = gameY;
  },
  clear:
    function () {
      let bgFixed = new Image();
      bgFixed.src = "./img/bg-fixed/bgfixed.png";
      ctx.drawImage(bgFixed, 0, 0, gameX, gameY);
    },
  bgLoop:
    function () {
      if ((loopXPosition + 4 * gameX) <= (gameX)) {
        loopXPosition = 0;
        speedOfGame *= 1.5;
        console.log("TESSSTEE DE LOOOOP ~ UTILIZAR PARA AUMENTAR A VELOCIDADE")
      }

      let bgActiveOne = new Image();
      bgActiveOne.src = "./img/bg-loop/bg01.png";
      ctx.drawImage(bgActiveOne, loopXPosition, gameY * 0.6, gameX, gameY * 0.4);

      let bgActiveTwo = new Image();
      bgActiveTwo.src = "./img/bg-loop/bg02.png";
      ctx.drawImage(bgActiveTwo, loopXPosition + gameX, gameY * 0.6, gameX, gameY * 0.4);

      let bgActiveThree = new Image();
      bgActiveThree.src = "./img/bg-loop/bg03.png";
      ctx.drawImage(bgActiveThree, loopXPosition + 2 * gameX, gameY * 0.6, gameX, gameY * 0.4);

      let bgActiveFour = new Image();
      bgActiveFour.src = "./img/bg-loop/bg01.png";
      ctx.drawImage(bgActiveFour, loopXPosition + 3 * gameX, gameY * 0.6, gameX, gameY * 0.4);

      loopXPosition -= 1 * speedOfGame;
    },

  stop: function () {
    cancelAnimationFrame(framesAnimation);
    console.log("Cancel", startGame);

  },
  score: function () {
    ctx.font = "20px serif";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, 50, 50);
  },
  giftBag: function () {
    if (giftsInBag === 1) {

      let giftStatus3 = new Image();
      giftStatus3.src = `./img/gifts/gifts-3.png`;
      ctx.drawImage(giftStatus3, gameX * 0.90, 10, 45, 45);

    } else if (giftsInBag === 2) {

      let giftStatus2 = new Image();
      giftStatus2.src = `./img/gifts/gifts-2.png`;
      ctx.drawImage(giftStatus2, gameX * 0.80, 10, 45, 45);

      let giftStatus3 = new Image();
      giftStatus3.src = `./img/gifts/gifts-3.png`;
      ctx.drawImage(giftStatus3, gameX * 0.90, 10, 45, 45);

    } else if (giftsInBag >= 3) {

      let giftStatus1 = new Image();
      giftStatus1.src = `./img/gifts/gifts-1.png`;
      ctx.drawImage(giftStatus1, gameX * 0.70, 10, 45, 45)

      let giftStatus2 = new Image();
      giftStatus2.src = `./img/gifts/gifts-2.png`;
      ctx.drawImage(giftStatus2, gameX * 0.80, 10, 45, 45);

      let giftStatus3 = new Image();
      giftStatus3.src = `./img/gifts/gifts-3.png`;
      ctx.drawImage(giftStatus3, gameX * 0.90, 10, 45, 45);
    }

    //   ctx.font = "20px serif";
    //   ctx.fillStyle = "white";
    //   ctx.fillText("Score: " + giftsInBag, gameX * 0.85, 50);
    // 
  }
};



console.log('01general.js - Working');



// ~~~~~~~~~~~~~~~~ RANDOM FUNCTION ~~~~~~~~~~~~~~~~~ //
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

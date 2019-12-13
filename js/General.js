// ~~~~~~~~~~~~~~~~ CANVAS PARAMETERS ~~~~~~~~~~~~~~~~~ //
window.onload = function() {
  document.getElementById("christmasGame").focus();
};
const canvas = document.getElementById('christmasGame');
canvas.width = window.innerWidth;
canvas.height = canvas.width * 0.5;
const gameX = canvas.width;
const gameY = canvas.height;
const ctx = canvas.getContext('2d');
const startResetButton = document.getElementById('startResetButton');
const gameOverImg = document.getElementById('gameOver');

// ~~~~~~~~~~~~~~~~ START GAME AREA ~~~~~~~~~~~~~~~~~ //
let frames = 0;
let gameArea = {
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
        speedOfGame *= 1.1;
        console.log("Speed UP");
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
    bgSound.pause();
    bgSound.currentTime = 0;
    gameOverSound.play();
    setTimeout(function () {gameOverImg.style.display = "block";}, 500);
    setTimeout(function () {gameOverImg.style.opacity = "0.25";}, 1000);
    setTimeout(function () {gameOverImg.style.opacity = "0.5";}, 2000);
    setTimeout(function () {gameOverImg.style.opacity = "0.75";}, 3000);
    setTimeout(function () {gameOverImg.style.opacity = "0.9";}, 4000);
  },
  score: function () {
    ctx.font = `${gameX*0.03}px serif`;
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, 50, 50);
  },
  giftBag: function () {
    if (giftsInBag === 1) {

      let giftStatus3 = new Image();
      giftStatus3.src = `./img/gifts/gifts-3.png`;
      ctx.drawImage(giftStatus3, gameX * 0.90, gameX*0.01, gameX*0.045, gameX*0.045);

    } else if (giftsInBag === 2) {

      let giftStatus2 = new Image();
      giftStatus2.src = `./img/gifts/gifts-2.png`;
      ctx.drawImage(giftStatus2, gameX * 0.80, gameX*0.01, gameX*0.045, gameX*0.045);

      let giftStatus3 = new Image();
      giftStatus3.src = `./img/gifts/gifts-3.png`;
      ctx.drawImage(giftStatus3, gameX * 0.90, gameX*0.01, gameX*0.045, gameX*0.045);

    } else if (giftsInBag >= 3) {

      let giftStatus1 = new Image();
      giftStatus1.src = `./img/gifts/gifts-1.png`;
      ctx.drawImage(giftStatus1, gameX * 0.70, gameX*0.01, gameX*0.045, gameX*0.045)

      let giftStatus2 = new Image();
      giftStatus2.src = `./img/gifts/gifts-2.png`;
      ctx.drawImage(giftStatus2, gameX * 0.80, gameX*0.01, gameX*0.045, gameX*0.045);

      let giftStatus3 = new Image();
      giftStatus3.src = `./img/gifts/gifts-3.png`;
      ctx.drawImage(giftStatus3, gameX * 0.90, gameX*0.01, gameX*0.045, gameX*0.045);
    }
  }
};

// ~~~~~~~~~~~~~~~~ RANDOM FUNCTION ~~~~~~~~~~~~~~~~~ //
  function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

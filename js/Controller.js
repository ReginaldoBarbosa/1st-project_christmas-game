console.log('03constroller.js - Working');

// ~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~ //
let giftsInBag = 3;
let giftsDroped = [];
let giftsToGotcha = [];
let housesLoop = [];
let lifeLeft = 3;
let score = 0;
let loopXPosition = 0;
let loopPlayerImg = 0;
let speedOfGame = 1;
var startGame = 5;



// ~~~~~~~~~~~~~~~~ PLAYER ~~~~~~~~~~~~~~~~~ //
const player = new Component(gameX * 0.4, gameY * 0.24, "blue", 50, 50);



let framesAnimation = requestAnimationFrame(updateGameArea);
// ~~~~~~~~~~~~~~~~ UPDATE ~~~~~~~~~~~~~~~~~ //
function updateGameArea() {
  gameArea.clear();
  gameArea.bgLoop();
  player.update();
  player.newPos();
  player.update();
  creatRandomGift();
  creatRandomHouse();
  updateGiftsDroped();
  checkScorePoint();
  gameArea.score();
  gameArea.giftBag();
  updateGiftsToGotcha()
  // drawChamney();
  frames += 1;
  framesAnimation = requestAnimationFrame(updateGameArea);
  checkDamage();
}








// ~~~~~~~~~~~~~~~~ PLAYER MOVES ~~~~~~~~~~~~~~~~~ //

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38: // up arrow
      player.speedY = -6;
      break;
    case 40: // down arrow
      player.speedY = +6;
      break;
    case 37: // left arrow
      player.speedX = -6;
      break;
    case 39: // right arrow
      player.speedX = +6;
      break;
    case 32: // space bar
      player.dropGift();
      break;
  }
};

document.onkeyup = function (e) {
  player.speedX = 0;
  player.speedY = 0;
};

// ~~~~~~~~~~~~~~~~ Gift to Gotcha ~~~~~~~~~~~~~~~~~ //
function updateGiftsToGotcha() {
  let crashed = giftsToGotcha.some(function (obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    giftsToGotcha.shift();
    if (giftsInBag <= 2) {
      return giftsInBag += 1;
    } 
    // else {
    //   giftsInBag += 1;
    // }
  }
};
// ~~~~~~~~~~~~~~~~ Gifts Creator ~~~~~~~~~~~~~~~~~ //
function creatRandomGift() {
  if (frames % 500 === 0) {
    giftsToGotcha.push(new Gift(50, 50, `./img/gifts/giftDrop-${randomNumber(1, 4)}.png`, gameX, randomNumber(0, gameY*0.8)));
    console.log(giftsToGotcha);
  }
  for (i = 0; i < giftsToGotcha.length; i++) {
    giftsToGotcha[i].x -= 1 + randomNumber(1, 10);
    // setInterval(if (giftsToGotcha[i].y > 0) {return (giftsToGotcha[i].y += 1)}, 600);
    giftsToGotcha[i].update();
  }
};

// ~~~~~~~~~~~~~~~~ House Creator ~~~~~~~~~~~~~~~~~ //
function creatRandomHouse() {
  if (frames % 500 === 0) {
    housesLoop.push(new HouseWithChimney(gameX * 0.2, gameY * 0.4, `./img/houses/house${randomNumber(1, 4)}.png`, gameX, gameY * 0.6));
    console.log(housesLoop);
  }
  for (i = 0; i < housesLoop.length; i++) {
    housesLoop[i].x -= 1 * speedOfGame;
    housesLoop[i].update();
  }
};
// ~~~~~~~~~~~~~~~~ Crash With a House ~~~~~~~~~~~~~~~~~ //
function checkDamage() {
  let crashed = housesLoop.some(function (obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    if (lifeLeft > 1) {
      player.receiveDamage();
      lifeLeft -= 1;
    } else {
      gameArea.stop();
    }
  }
};
// ~~~~~~~~~~~~~~~~ Droped Gift ~~~~~~~~~~~~~~~~~ //
function updateGiftsDroped() {
  for (i = 0; i < giftsDroped.length; i++) {
    giftsDroped[i].y *= 1.02;
    giftsDroped[i].update();
  }
};
// ~~~~~~~~~~~~~~~~ SCORE ~~~~~~~~~~~~~~~~~ //
function checkScorePoint() {
  let crashed = giftsDroped.some(function (obstacle) {
    return housesLoop.some(e => e.crashWithChimney(obstacle));
  });

  if (crashed) {
    giftsDroped.shift();
    score += 1;
    setInterval(drawChamney(),5000)
    if (score % 10 === 0){
      if(lifeLeft < 3) {
        lifeLeft +=1;
      }
    }
  }
};
function drawChamney() {
  housesLoop.forEach(e => {
    ctx.fillStyle = "rgba(234,237,50,0.5)"
    ctx.fillRect(e.x + e.width*0.45,e.y,50,50);
  })
}
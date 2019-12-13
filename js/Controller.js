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
let startGame = 5;

// ~~~~~~~~~~~~~~~~ NEW PLAYER ~~~~~~~~~~~~~~~~~ //
const player = new Component(gameX * 0.4, gameY * 0.24, "blue", 50, 50);

// ~~~~~~~~ START/RESET and STOP Button ~~~~~~~~~ //
let startButton = document.getElementById('startResetButton');
startButton.onclick = (event) => {
  if (frames === 0) {
    let framesAnimation = requestAnimationFrame(updateGameArea);
    bgSound();
    event.target.disabled = true;
    event.target.disabled = false;
  } else {
    canvas.focus();
    giftsInBag = 3;
    giftsDroped = [];
    giftsToGotcha = [];
    housesLoop = [];
    lifeLeft = 3;
    score = 0;
    loopXPosition = 0;
    loopPlayerImg = 0;
    speedOfGame = 1;
    startGame = 5;
    frames = 0;
    event.target.disabled = true;
    event.target.disabled = false;
  }
}

let pauseButton = document.getElementById('pauseButton');
let pauseStatus = true;
pauseButton.onclick = (event) => {
  if (pauseStatus) {
    framesAnimation = cancelAnimationFrame(framesAnimation);
    pauseStatus = !pauseStatus;
    event.target.disabled = true;
    event.target.disabled = false;
  } else {
    framesAnimation = requestAnimationFrame(updateGameArea);
    pauseStatus = !pauseStatus;
    event.target.disabled = true;
    event.target.disabled = false;
  }
};

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
let buttonMoveUp = document.getElementById('buttonMoveUp');
let buttonMoveDown = document.getElementById('buttonMoveDown');
let buttonMoveRight = document.getElementById('buttonMoveRight');
let buttonMoveLeft = document.getElementById('buttonMoveLeft');
let buttonDrop = document.getElementById('buttonDrop');

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
buttonMoveUp.onclick = (event) => {
  player.speedY -= 6;
  event.target.disabled = true;
  event.target.disabled = false;
  setTimeout( player.speedX *= 0.5, 500);
  setTimeout( player.speedY *= 0.5, 500);
};
buttonMoveDown.onclick = (event) => {
  player.speedY += 6;
  event.target.disabled = true;
  event.target.disabled = false;
  setTimeout( player.speedX *= 0.5, 500);
  setTimeout( player.speedY *= 0.5, 500);
};
buttonMoveLeft.onclick = (event) => {
  player.speedX -= 6;
  event.target.disabled = true;
  event.target.disabled = false;
  setTimeout( player.speedX *= 0.5, 500);
  setTimeout( player.speedY *= 0.5, 500);
};
buttonMoveRight.onclick = (event) => {
  player.speedX += 6;
  event.target.disabled = true;
  event.target.disabled = false;
  setTimeout( player.speedX *= 0.5, 500);
  setTimeout( player.speedY *= 0.5, 500);
};
buttonDrop.onclick = (event) => {
  player.dropGift();
  event.target.disabled = true;
  event.target.disabled = false;
  setTimeout( player.speedX *= 0.5, 500);
  setTimeout( player.speedY *= 0.5, 500);
};

document.onkeyup = function (e) {
  player.speedX *= 0.5;
  player.speedY *= 0.5;
};

// ~~~~~~~~~~~~~~~~ Gift to Gotcha ~~~~~~~~~~~~~~~~~ //
function updateGiftsToGotcha() {
  let crashed = giftsToGotcha.some(function (obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    gotGiftSound();
    giftsToGotcha.forEach((e, idx) => {
      if (player.crashWith(e)) {
        giftsToGotcha.splice(idx, 1);
      }
    });
    if (giftsInBag <= 2) {
      return giftsInBag += 1;
    }
  }
};

// ~~~~~~~~~~~~~~~~ Gifts Creator ~~~~~~~~~~~~~~~~~ //
function creatRandomGift() {
  if (frames % 500 === 0) {
    giftsToGotcha.push(new Gift(50, 50, `./img/gifts/giftDrop-${randomNumber(1, 4)}.png`, gameX, randomNumber(0, gameY * 0.8)));
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
  if (frames % 780 === 0) {
    housesLoop.push(new HouseWithChimney(gameX * 0.2, gameY * 0.4, `./img/houses/house${randomNumber(1, 4)}.png`, gameX, gameY * 0.6));
    speedOfGame *= 1.05;
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
    ouchSound();
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
  let missedChamney = giftsDroped.some(e => (e.y >= gameY * 1.1 && e.y <= gameY * 1.2));
  if (missedChamney) {
    missChamney();
  }

  if (crashed) {
    giftsDroped.shift();
    score += 1;
    setInterval(drawChamney(), 5000)
    if (score % 10 === 0) {
      if (lifeLeft < 3) {
        lifeLeft += 1;
        speedOfGame *= 1.05;
      }
    }
  }
};
function drawChamney() {
  housesLoop.forEach(e => {
    ctx.fillStyle = "rgba(234,237,50,0.5)"
    ctx.fillRect(e.x + e.width * 0.45, e.y, 50, 50);
  })
}

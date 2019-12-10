const imageLifesLeft = [
  ['./img/player/1LifeLeft/1.png','./img/player/1LifeLeft/2.png','./img/player/1LifeLeft/3.png','./img/player/1LifeLeft/4.png','./img/player/1LifeLeft/5.png'],
  ['./img/player/2LifeLeft/1.png','./img/player/2LifeLeft/2.png','./img/player/2LifeLeft/3.png','./img/player/2LifeLeft/4.png','./img/player/2LifeLeft/5.png'],
  ['./img/player/3LifeLeft/1.png','./img/player/3LifeLeft/2.png','./img/player/3LifeLeft/3.png','./img/player/3LifeLeft/4.png','./img/player/3LifeLeft/5.png']
];

console.log('03constroller.js - Working');
console.log(testeee);

// ~~~~~~~~~~~~~~~~ PLAYER MOVES ~~~~~~~~~~~~~~~~~ //

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38: // up arrow
      player.speedY -= 5;
      break;
    case 40: // down arrow
      player.speedY += 5;
      break;
    case 37: // left arrow
      player.speedX -= 5;
      break;
    case 39: // right arrow
      player.speedX += 5;
      break;
  }
};

document.onkeyup = function (e) {
  player.speedX = 0;
  player.speedY = 0;
};

console.log('aaaaaaaaaaaaa');

const imgLifesLeft = [
['./img/player/1LifeLeft/1.png', './img/player/1LifeLeft/2.png', './img/player/1LifeLeft/3.png', './img/player/1LifeLeft/4.png', './img/player/1LifeLeft/5.png'],
  ['./img/player/2LifeLeft/1.png', './img/player/2LifeLeft/2.png', './img/player/2LifeLeft/3.png', './img/player/2LifeLeft/4.png', './img/player/2LifeLeft/5.png'],
['./img/player/3LifeLeft/1.png', './img/player/3LifeLeft/2.png', './img/player/3LifeLeft/3.png', './img/player/3LifeLeft/4.png', './img/player/3LifeLeft/5.png']
];

// ~~~~~~~~~~~~~~~~ RANDOM FUNCTION ~~~~~~~~~~~~~~~~~ //
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};


console.log('02player.js - Working');


class Player {
  constructor(positionX, positionY, width, height) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.speedY = 10;
    this.speedX = 10;
    this.image = new Image();
  }
};
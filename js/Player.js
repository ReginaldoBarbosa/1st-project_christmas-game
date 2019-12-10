console.log('02player.js - Working');

// ~~~~~~~~~~~~~~~~ PLAYER ~~~~~~~~~~~~~~~~~ //
class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 1;
    this.speedY = 0;
  }
  update() {
    if (lifeLeft <= 1) {
      this.width = (gameX * 0.4) * 0.561;
      this.height = (gameY * 0.24) * 0.93;

      if (loopPlayerImg <= 15) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/1.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);

      } else if (loopPlayerImg > 15 && loopPlayerImg <= 30) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/2.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);

      } else if (loopPlayerImg > 30 && loopPlayerImg <= 45) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/3.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);

      } else if (loopPlayerImg > 45 && loopPlayerImg <= 60) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/4.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);

      } else if (loopPlayerImg > 60 && loopPlayerImg <= 75) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/5.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);
      } else if (loopPlayerImg > 75) {
        loopPlayerImg = 0;
      }
      loopPlayerImg += 1;
    }

    if (lifeLeft === 2) {
      
      this.width = (gameX * 0.4) * 0.775;
      this.height = (gameY * 0.24) * 0.944;

      if (loopPlayerImg <= 15) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/1.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);

      } else if (loopPlayerImg > 15 && loopPlayerImg <= 30) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/2.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);

      } else if (loopPlayerImg > 30 && loopPlayerImg <= 45) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/3.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);

      } else if (loopPlayerImg > 45 && loopPlayerImg <= 60) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/4.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);

      } else if (loopPlayerImg > 60 && loopPlayerImg <= 75) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/5.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);
      } else if (loopPlayerImg > 75) {
        loopPlayerImg = 0;
      }
      loopPlayerImg += 1;
    }

    if (lifeLeft === 3) {

      if (loopPlayerImg <= 15) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/1.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);

      } else if (loopPlayerImg > 15 && loopPlayerImg <= 30) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/2.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);

      } else if (loopPlayerImg > 30 && loopPlayerImg <= 45) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/3.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);

      } else if (loopPlayerImg > 45 && loopPlayerImg <= 60) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/4.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);

      } else if (loopPlayerImg > 60 && loopPlayerImg <= 75) {
        let playerImgLoopOne = new Image();
        playerImgLoopOne.src = `./img/player/${lifeLeft}LifeLeft/5.png`;
        ctx.drawImage(playerImgLoopOne, this.x, this.y, this.width, this.height);
      } else if (loopPlayerImg > 75) {
        loopPlayerImg = 0;
      }
      loopPlayerImg += 1;
    }
  }
  newPos() {
    this.x += this.speedX;
    if ((this.x + this.width) >= gameX) {
      this.x = gameX - this.width;
    }
    if ((this.x) <= 0) {
      this.x = 0;
    }
    this.y += this.speedY;
    if ((this.y + this.height) >= gameY) {
      this.y = gameY - this.height;
    }
    if ((this.y) <= 0) {
      this.y = 0;
    }
  }
  dropGift() {
    if (giftsInBag > 0) {
      console.log('Youuu droped a gift');
      giftsDroped.push(new Gift(this.width * 0.2, this.height * 0.7, `./img/gifts/giftDrop-${randomNumber(1,4)}.png`, this.x, this.y));
      console.log(giftsDroped);
      giftsInBag -= 1;
    }
    console.log("Gifts in bag is over");
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
  receiveDamage (){
    this.x = 50;
    this.y = 50;
  }
};

// ~~~~~~~~~~~~~~~~ Gifts ~~~~~~~~~~~~~~~~~ //

class Gift {
  constructor(width, height, imgSRC, x, y) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imgSRC = imgSRC;
    this.speedX = 5;
    this.speedY = 5;
  }
  update() {
        let dropedGiftImg = new Image();
        dropedGiftImg.src = `${this.imgSRC}`;
        ctx.drawImage(dropedGiftImg, this.x, this.y, this.width, this.height);
    }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

// ~~~~~~~~~~~~~~~~ HOUSES WITH CHIMMEY ~~~~~~~~~~~~~~~~~ //

class HouseWithChimney {
  constructor(width, height, imgSRC, x, y) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imgSRC = imgSRC;
    this.speedX = 2;
    this.speedY = 2;
  }
  update() {
        let dropedGiftImg = new Image();
        dropedGiftImg.src = `${this.imgSRC}`;
        ctx.drawImage(dropedGiftImg, this.x, this.y, this.width, this.height);
    }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}




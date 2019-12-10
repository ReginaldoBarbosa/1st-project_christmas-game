console.log('02player.js - Working');


// ~~~~~~~~~~~~~~~~ RANDOM FUNCTION ~~~~~~~~~~~~~~~~~ //
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


class Gift extends Component {
  constructor(width, height, imgSRC, x, y) {
    super(x,y);
    this.width = width;
    this.height = height;
    this.imgSRC = imgSRC;
    this.speedX = 0;
    this.speedY = 0;
  }
  update() {
        let dropedGiftImg = new Image();
        dropedGiftImg.src = `${this.imgSRC}`;
        ctx.drawImage(dropedGiftImg, this.x, this.y, this.width, this.height);
    }

  newPos() {
    giftsDrop += 1;
    this.x += this.speedX;
    if ((this.x + this.width) >= gameX) {
      this.x = gameX-this.width;
    }
    if ((this.x) <= 0) {
      this.x = 0;
    }
    this.y += this.speedY;
    if ((this.y + this.height) >= gameY) {
      this.y = gameY-this.height;
    }
    if ((this.y) <= 0){
      this.y = 0;
    }
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
// ~~~~~~~~~~~~~~~~ SOUNDS ~~~~~~~~~~~~~~~~~ //
// During the game
const bgSound = new Audio();
bgSound.src = "./sound/DeckTheHalls.mp3"
bgSound.loop = true;

// Get present sound
function gotGiftSound() {
  const sound = new Audio();
  sound.src = "./sound/gotcha.flac"
  sound.play();
};

// Get present sound
function missChamney() {
  const sound = new Audio();
  sound.src = "./sound/errou.mpeg"
  sound.play();
};


// Ouch sound
function ouchSound() {
  const sound = new Audio();
  sound.src = `./sound/Ouch${randomNumber(1,2)}.mpeg`
  sound.play();
};


// Game over sound
const gameOverSound = new Audio();
gameOverSound.src = "./sound/gameOver.mpeg"
gameOverSound.loop = true;
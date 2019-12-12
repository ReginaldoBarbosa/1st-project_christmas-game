// ~~~~~~~~~~~~~~~~ SOUNDS ~~~~~~~~~~~~~~~~~ //
// During the game
function bgSound() {
  const bgSound = new Audio();
  bgSound.src = "./sound/DeckTheHalls.mp3"
  bgSound.loop = true;
  bgSound.play();
};

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
function gameOverSound() {
  const sound = new Audio();
  sound.src = "./sound/gameOver.mpeg"
  sound.play();
};
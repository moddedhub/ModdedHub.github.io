const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = {
  x: 0,
  y: 0,
  width: 50,
  height: 50,
  speed: 100, // pixels per second
  lastFrameTime: 0,
};

let enemies = [
  {
    x: 300,
    y: 300,
    width: 50,
    height: 50,
    speed: 50, // pixels per second
    lastFrameTime: 0,
  },
  {
    x: 600,
    y: 600,
    width: 50,
    height: 50,
    speed: 75, // pixels per second
    lastFrameTime: 0,
  },
];

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    player.y -= 10;
  } else if (event.key === 'ArrowDown') {
    player.y += 10;
  } else if (event.key === 'ArrowLeft') {
    player.x -= 10;
  } else if (event.key === 'ArrowRight') {
    player.x += 10;
  }
});

function update(time) {
  let elapsedTime = time - player.lastFrameTime;
  player.lastFrameTime = time;

  player.x += elapsedTime * player.speed / 1000;
  player.y += elapsedTime * player.speed / 1000;

  enemies.forEach(enemy => {
    elapsedTime = time - enemy.lastFrameTime;
    enemy.lastFrameTime = time;

    enemy.x += elapsedTime * enemy.speed / 1000;
    enemy.y += elapsedTime * enemy.speed / 1000;

    // Collision detection
    if (
      enemy.x < player.x + player.width &&
      enemy.x + enemy.width > player.x &&
      enemy.y < player.y + player.height &&
      enemy.y + enemy.height > player.y
    ) {
      alert('Game Over!');
    }
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx

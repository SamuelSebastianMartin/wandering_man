const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
keys = [];
const man = {
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  speed: 5
}

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = "blue";
  ctx.fillRect(man.x, man.y, man.width, man.height);
  movePlayer();
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("keydown", function(e){
  if (!keys.includes(e.key)){
  keys.push(e.key);
  console.log(keys);
  }
});
window.addEventListener("keyup", function(e){
  for (let i = 0; i < keys.length; i++){
    if (keys[i] === e.key){
      keys.splice(i, 1);
    }
  }
});

function movePlayer(){
  if (keys.includes("ArrowUp")){
    man.y -= man.speed;
    if (man.y < 0) man.y = 0;
  }
  if (keys.includes("ArrowDown")){
    man.y += man.speed;
    if (man.y + man.height > CANVAS_HEIGHT) man.y = CANVAS_HEIGHT - man.height;
  }
  if (keys.includes("ArrowLeft")){
    man.x -= man.speed;
    if (man.x < 0) man.x = 0;
  }
  if (keys.includes("ArrowRight")){
    man.x += man.speed;
    if (man.x + man.width > CANVAS_WIDTH) man.x = CANVAS_WIDTH - man.width;
  }
  if (keys.includes("a")){
    man.speed ++;
  }
  if (keys.includes("z")){
    man.speed --;
    if (man.speed < 1) man.speed = 1;
  }
}

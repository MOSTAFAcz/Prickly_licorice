let objects = [];

let apple;
let basket;

let keys = {};

let score;

function preload() {
  apple = loadImage('./images/Apple.png');
  basket = loadImage('/images/Basket.png');
  menu = loadImage('/images/menu1.png');
}

function setup() {
  createCanvas(400, 400);
  basket = new Basket(width/2, 320, 80, basket);
  score = 0;
}

function update(){
  let x = random(30, width-30);
  let y = random(-100, -20);
  let size = random(10, 30);
  if(frameCount % 10 === 0 && random(1) > 0.5){
    objects.push(new FallingObject( x, y, size, 5, apple))
  }
  
  for (let c of objects) {
    let closestX = constrain(c.x, basket.x, basket.x + basket.size/2);
    let closestY = constrain(c.y, basket.y, basket.y + basket.size/2);
    
    let dx = c.x - closestX;
    let dy = c.y - closestY; // jak daleko jsou od sebe body 
    
  let r = c.size / 2; // poloměr jablka
    
    if (dx*dx + dy*dy < r*r){
      console.log("KOLIZE");
      objects.splice(c, 1);
      score++;
    }
  }
}


function draw() {
  background(220);
  image(menu, -5, -5, 176, 70);
  textFont('Baloo');
  color(0, 0, 0);
  text("score: " + score, 20, 20)
  update();
    for(let obj of objects){
    obj.update();
    obj.draw();
  }
  
  if (keyIsDown(LEFT_ARROW) === true) basket.move("left");
  if (keyIsDown(RIGHT_ARROW) === true) basket.move("right");
  
  basket.update();
  basket.draw();
}


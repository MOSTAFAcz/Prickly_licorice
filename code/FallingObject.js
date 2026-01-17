class FallingObject{
  constructor(x, y, size, speed, img, reward){
    this.x = x;
    this.y = y;
    this.size = size;
    this.img = img;
    this.speed = speed;
    this.reward = reward;
  }
  
  update(){
    this.y += this.speed;
  }
  
  draw(){
   image(this.img, this.x, this.y, this.size, this.size);
  }
}
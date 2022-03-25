class Snake{  
  constructor(){
    this.x = displayWidth/4;
    this.y = displayHeight/4;
    this.speed = 3;
  }
  
  update(posX,posY){
    this.x += posX * this.speed;
    this.y += posY * this.speed;
  }
  
  show(){
    fill(10);
    rect(this.x, this.y, 20, 20);
  }
}

let snake;

let dirX;
let dirY;

function setup() {
  createCanvas(displayWidth/2, displayHeight/2);
  
  snake = new Snake();
  dirX = 1;
  dirY = 0;
}

function draw() {
  background(220);
  
  if(keyIsPressed){
    direction();
  }
  
  snake.update(dirX, dirY);
  
  snake.show();
}

function direction(){
  if(key == 'd' || key == 'D' 
   || keyCode == RIGHT_ARROW){
    dirX = 1;
    dirY = 0;
  }else if(key == 'a' || key == 'A' 
           || keyCode == LEFT_ARROW){
    dirX = -1;
    dirY = 0;
  }else if(key == 's' || key == 'S' 
           || keyCode == DOWN_ARROW){
    dirX = 0;
    dirY = 1;
  }else if(key == 'w' || key == 'W' 
           || keyCode == UP_ARROW){
    dirX = 0;
    dirY = -1;      
  }
}

let x; // mouseX coordinate
let y; // mouseY coordinate

let posX; // Central X coordinate
let posY; // Central Y coordinate

let canvas_size;

let r; // Circle radius

function setup() {
  canvas_size = 400;
  createCanvas(canvas_size, canvas_size);
  posX = 0;
  posY = 0;
  
  r = 100;
}

function draw() {
  background(0);
  translate(canvas_size/2,canvas_size/2);
  
  // Get mouse X and  Y coords
  x = (mouseX - canvas_size/2) - posX;
  y = (mouseY - canvas_size/2) - posY;
  
  // Walking
  if(keyIsPressed){
   direction();    
  }  
  
  stroke(255);
  noFill();
  ellipse(posX,posY, 2 * r, 2 * r);
  
  character();
}


function character(){
  // Get distance from center of circle to mouse
  D = sqrt(sq(x) + sq(y));
  
  // Get angle of looking direction
  alfa = acos(y / D);
  beta = -acos(y / D);
  amp = 0.1; // FOV
  
  
  if(x > 0){
    line(posX, posY, (r * sin(alfa - amp)) + posX,
                     (r * cos(alfa - amp)) + posY);
    line(posX, posY, (r * sin(alfa + amp)) + posX, 
                     (r * cos(alfa + amp)) + posY);    
  }else{
    line(posX, posY, (r * sin(beta - amp)) + posX,
                     (r * cos(beta - amp)) + posY);    
    line(posX, posY, (r * sin(beta + amp)) + posX,
                     (r * cos(beta + amp)) + posY);
  }
  
  // CAN BE USED TO SUBSTITUTE SECOND X AND Y COORDS
  // co = x * r / D; 
  // ca = y * r / D;
  // line(posX, posY, co + posX, ca + posY);
}

function direction(){  
  switch(key){
    case 'w' || 'W' || UP_ARROW:
      posY--;
      break;
    case 'a' || 'A' || LEFT_ARROW:
      posX--;
      break;
    case 's' || 'S' || DOWN_ARROW:
      posY++;
      break;
    case 'd' || 'D' || RIGHT_ARROW:
      posX++;
      break;
      
      
    // DOESN'T WORK
      
    // case ('w' && 'a') || ('W' && 'A') 
    //       || (UP_ARROW && LEFT_ARROW):
    //   posY--;
    //   posX--;
    //   break;
    // case ('w' && 'd') || ('W' && 'D') 
    //       || (UP_ARROW && RIGHT_ARROW):
    //   posY--;
    //   posX++;
    //   break;
    // case ('s' && 'a') || ('S' && 'A')
    //       || (DOWN_ARROW && LEFT_ARROW):
    //   posY++;
    //   posX--;
    //   break;
    // case ('s' && 'd') || ('S' && 'D') 
    //       || (DOWN_ARROW && RIGHT_ARROW):
    //   posY++;
    //   posX++;
    //   break;
  }
}
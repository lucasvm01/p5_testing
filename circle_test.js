function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(200,200);
  
  let x = mouseX - 200;
  let y = mouseY - 200;
  
  r = 100;
  
  D = sqrt(sq(x) + sq(y));
  
  co = x * r / D; 
  ca = y * r / D;
  
  alfa = acos(y / D);
  beta = -acos(y / D);
  
  stroke(255);
  noFill();
  ellipse(0,0, 2 * r, 2 * r);
  
  amp = 0.1;
  
  if(x > 0){
    line(0,0,r * sin(alfa - amp), r * cos(alfa - amp));
    line(0,0,r * sin(alfa + amp), r * cos(alfa + amp));    
  }else{
    line(0,0,r * sin(beta - amp), r * cos(beta - amp));    
    line(0,0,r * sin(beta + amp), r * cos(beta + amp));
  }
  
  fill(255);
  ellipse(co,ca,8);
}
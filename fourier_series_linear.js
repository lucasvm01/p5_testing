let r = 10;
let s = 0;

let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0,100,0);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  scale(50);
  
  strokeWeight(0.1);
  
  stroke(255,0,0);
  line(-PI,PI,PI,-PI);
  
  a = slider.value();
  
  stroke(255);
  beginShape(LINES);
  for(let x=-PI ; x<=PI ; x+=0.01){
    for(let n=1 ; n<=a ; n++){
      s += -1 * pow(-1,n+1) * (2/n) * sin(n * x);
    }
    
    vertex(x,s);
    
    s = 0;
  }
  endShape();
}
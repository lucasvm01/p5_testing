let nLine = 2;
let slider;
let axisXSize = 20;
let axisYSize = 20;
let graphScale = 10;

function setup() {
  createCanvas(400, 400);
  scale(100);
  slider = createSlider(1,20,2);
}

function draw() {
  background(0);
  translate(200, 200);
  
  scale(slider.value());
  
  drawXaxis();
  
  drawYaxis();
  
  createGraph();
  
}

function createGraph(){
  for(let i = -axisXSize; i <= axisXSize; i+= 0.05){
    ellipse(i * graphScale,-1 * 
            
            /* Put your function here: */
            
                (pow(i,sin(i)))
            
            /*                         */
            
                * graphScale,0.05);
  }
}

function drawXaxis(){
  
  stroke(255);
  line(0, -axisXSize * graphScale, 0, axisXSize * graphScale);
  
  for(let i = -axisXSize; i <= axisXSize + 200; i ++){
    if(i !== 0){   
      line(i * graphScale, -nLine, i * graphScale, nLine);
    }
  }
}

function drawYaxis(){
  
  stroke(255);
  line(-axisYSize * graphScale, 0, axisYSize * graphScale, 0);
  
  for(let i = -axisYSize; i <= axisYSize; i ++){
    if(i !== 0){   
      line(-nLine, i * graphScale, nLine, i * graphScale);
    }
  }
}
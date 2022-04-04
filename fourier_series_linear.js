let L; // Controla o período da função
let a; // Receberá a quantidade n de soma da série
let s = 0; // Receberá a soma da série
let inp; // Controle do input do período

let slider;
let sliderScale;

let nLine = 2;
let axisXSize = 20;
let axisYSize = 20;
let graphScale = 10;

  //Aqui só é setado o básico para início do programa
function setup() {
  createCanvas(600, 600);
  slider = createSlider(0,100,0);
  sliderScale = createSlider(0,100,2);
  L = PI; 
  inp = createInput(PI.toString());
  inp.input(myInputEvent);
}

// Função para input
function myInputEvent() {
  L = this.value();
}

function draw() {
  background(0);
  translate(width/2,height/2);
  scale(sliderScale.value());
  
  strokeWeight(1/(3 - sliderScale.value()));
  
  drawGrid();
  
  // Desenho da função linear
  stroke(255,0,0);
  line(-L * graphScale,L * graphScale,L * graphScale,-L * graphScale);
  
  createGraph();
  
}

function createGraph(){
  
  // Controla a quantidade de somas da série
  a = slider.value();
  
  stroke(255);
  beginShape(LINES);
  
  for(let x = -axisXSize; x <= axisXSize; x+= 0.01){
    
    // Série de fourier no período selecionado com a soma até n definida
    for(let n=1 ; n<=a ; n++){ // Soma
      s += (-1 * pow(-1,n+1) * (2/n) * sin(n * x * (PI / L)) * (1/PI * L));
    }

    vertex(x * graphScale,s * graphScale); // Desenha a função

    s = 0;

  }
  
  endShape();
  

}

function drawGrid(){
  drawXaxis();
  drawYaxis();
}

function drawXaxis(){
  
  stroke(255);
  line(0, -axisXSize * graphScale, 0, axisXSize * graphScale);
  
  for(let i = -axisXSize; i <= axisXSize; i ++){
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


let L; // Controla o período da função
let a; // Receberá a quantidade n de soma da série
let s = 0; // Receberá a soma da série
let inp; // Controle do input do período

let slider;
let sliderScale;


  //Aqui só é setado o básico para início do programa
function setup() {
  createCanvas(600, 600);
  slider = createSlider(0,100,0);
  sliderScale = createSlider(0,100,50);
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
  
  strokeWeight(0.1);
  
  // Desenho da função linear
  stroke(255,0,0);
  line(-L,L,L,-L);
  
  // Controla a quantidade de somas da série
  a = slider.value();
  
  stroke(255);
  beginShape(LINES);
  
  // Série de fourier no período selecionado com a soma até n definida
  for(let x=-L ; x<=L ; x+=0.01){ // Período
    for(let n=1 ; n<=a ; n++){ // Soma
      s += (-1 * pow(-1,n+1) * (2/n) * sin(n * x * (PI / L)) * (1/PI * L));
    }
    
    vertex(x,s); // Desenha a função
    
    s = 0;
  }
  
  endShape();
  
//   beginShape(LINES);
//   for(let x=-L ; x<=L ; x+=0.01){
//     for(let n=1 ; n<=a ; n++){
//       s += (-1 * pow(-1,n+1) * (2/n) * sin(n * x ) );
//     }
    
//     vertex(x,s);
    
//     s = 0;
//   }
//   endShape();
}
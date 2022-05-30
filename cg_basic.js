
let sl;
let time;

let v = [];

let winWidth;
let winHeight;
let angle;
let zfar;
let znear;

let matRotZ;
let matRotX;

let a;
let fov;
let q;

let proj;

function matrixMult(v, matrix){
  let px = v.x * matrix[0][0] + v.y * matrix[0][1] + v.z * matrix[0][2] + matrix[0][3];
  let py = v.x * matrix[1][0] + v.y * matrix[1][1] + v.z * matrix[1][2] + matrix[1][3];
  let pz = v.x * matrix[2][0] + v.y * matrix[2][1] + v.z * matrix[2][2] + matrix[2][3];
  let pw = v.x * matrix[3][0] + v.y * matrix[3][1] + v.z * matrix[3][2] + matrix[3][3];
  
  return [px, py, pz, pw];
}

function drawMesh(v1, v2, v3, v4, v5, v6, v7, v8){
  // South
  drawTriangle(v1, v2, v4);
  drawTriangle(v1, v4, v3);
  // East
  drawTriangle(v3, v4, v5);
  drawTriangle(v3, v5, v7);
  // North
  drawTriangle(v7, v5, v6);
  drawTriangle(v7, v6, v8);
  // West  
  drawTriangle(v8, v6, v2);
  drawTriangle(v8, v2, v1);
  // Top
  drawTriangle(v4, v2, v6);
  drawTriangle(v4, v6, v5);
  // Bottom
  drawTriangle(v1, v8, v7);
  drawTriangle(v1, v7, v3);
}

function drawTriangle(v1, v2, v3){
  beginShape();
  stroke(255,0,0); 
  line(v1.x, v1.y, v2.x, v2.y, v1.z, v2.z);
  endShape();
  
  beginShape();
  stroke(0,255,0); 
  line(v2.x, v2.y, v3.x, v3.y, v2.z, v3.z);
  endShape();
  
  beginShape();
  stroke(0,0,255); 
  line(v1.x, v1.y, v3.x, v3.y, v1.z, v3.z);
  endShape();
}

function drawPerspective(v){
  
  for(let i=0; i<8; i++){
    v[i].z += 3;
    let vec = matrixMult(v[i], proj);
    
    if(vec !== 0){
      vec[0] /= vec[3];
      vec[1] /= vec[3];
      vec[2] /= vec[3];  
    }
    
    v[i] = createVector(vec[0], vec[1], vec[2]);
  }
  
  return v;
}

function rotate(){
  
}

function InitializePerspective(){
  
  sl = 3;
  
  a = winWidth / winHeight;
  fov = 1/(tan(angle)/2);
  q = zfar/(zfar-znear);
  
  proj = [[a * fov, 0  , 0          , 0],
          [0      , fov, 0          , 0],
          [0      , 0  , q          , 1],
          [0      , 0  , -znear * q, 0]];
  
  v[0] = createVector(0 * sl, 0 * sl, 0 * sl);
  v[1] = createVector(0 * sl, 1 * sl, 0 * sl);
  v[2] = createVector(1 * sl, 0 * sl, 0 * sl);
  v[3] = createVector(1 * sl, 1 * sl, 0 * sl);
  v[4] = createVector(1 * sl, 1 * sl, 1 * sl);
  v[5] = createVector(0 * sl, 1 * sl, 1 * sl);
  v[6] = createVector(1 * sl, 0 * sl, 1 * sl);
  v[7] = createVector(0 * sl, 0 * sl, 1 * sl);
}

function InitializeRotation(time){
  matRotZ =[[cos(time), -sin(time) , 0, 0],
            [sin(time) , cos(time) , 0, 0],
            [0         , 0         , 1, 0],
            [0         , 0         , 0, 1]];
  
  matRotX =[[1, 0          , 0           , 0],
            [0, cos(time/2), -sin(time/2), 0],
            [0, sin(time/2), cos(time/2) , 0],
            [0, 0          , 0           , 1]]; 
}

function setup() {
  winWidth = 500;
  winHeight = 500;
  angle = 80 * 0.5 * PI / 180;
  zfar = 1000;
  znear = 0.1;
  
  createCanvas(winWidth, winHeight);
  
  noCursor();
  
  InitializePerspective();
  
  v = drawPerspective(v);
  
}

function draw() {
  // noLoop();
  background(0);
  translate(width/2, height/2);
  stroke(100);
  ellipse(mouseX - width/2, mouseY - height/2, 10);  
  scale(5);
  
  time += 1;
  
  for(let i=0 ; i<8 ; i++){
    
  }
  
  
  drawMesh(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7]);
}

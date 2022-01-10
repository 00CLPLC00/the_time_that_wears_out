//the time that wears out? CLPLC code for all minds
//Wait few seconde after begining 
//Then, hold if you want the time
//Take care

let sizeCirc = 30;
let speed= -0.3;
let speed2 =-2
let speedtxt=-0.03
let sizeTxt = 2;
let sizeTxt2 = 2;
let sizeTxt3 = 2;

function setup() {
  createCanvas(400, 400);
 

  
}
function draw() {
  background(0);
  
  if (sizeCirc>width || sizeCirc<0){
    speed = speed *-1; 
  }
  else if(sizeTxt>width || sizeTxt<0){
    speed2 = speed2 *-1;  
  }
  
  //CERCLE 1
  
  noStroke();
  fill(255);
  circle (random(400),random(400),random(2,5));
 
  //CERCLE 1
  
  noStroke();
  fill(255);
  circle (random(400),random(400),random(0.5,3));
  
   
  //CERCLE 1
  
  noStroke();
  fill(255);
  circle (random(400),random(400),random(0.3,3));
  
 
  //CERCLE 1

  noStroke();
  fill(255);
  circle (random(400),random(400),random(0.2,0.8));
 
  
 
  //CERCLE 2
  noStroke();
  fill(255);
  circle (200,200,sizeCirc);
 
  
  sizeCirc += speed;
  
  
  
  noStroke();
  fill(0);
  textAlign(CENTER);
  textSize(sizeTxt);
  text('Le Temps',200,200);
  
  sizeTxt += speed2/4;
  
  noStroke();
  fill(0);
  textAlign(CENTER);
  textSize(sizeTxt2);
  text('Qui',200,150);
  
  sizeTxt2 += speed2/6;
  
   noStroke();
  fill(0);
  textAlign(CENTER);
  textSize(sizeTxt3);
  text("s'use",200,300)
  
  sizeTxt3 += speed2/4;
    
  if (mouseIsPressed){
    background(255);
    noStroke();
    fill(0);
    circle (200,200,sizeCirc);
    
    //CERCLE 1
  
  noStroke();
  fill(255);
  circle (random(400),random(400),random(5,15));
 
  //CERCLE 1
  
  noStroke();
  fill(0);
  circle (random(400),random(400),random(6,9));
  
   
  //CERCLE 1
  
  noStroke();
  fill(0);
  circle (random(400),random(400),random(1,6));
  
 
  //CERCLE 1

  noStroke();
  fill(0);
  circle (random(400),random(400),random(0.2,0.8));
 
  
 
  //CERCLE 2
  noStroke();
  fill(0);
  circle (200,200,sizeCirc);
 
  
  sizeCirc += speed;
    
    
    noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(sizeTxt);
  text('Le Temps',200,200);
    
    
    noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(sizeTxt2);
  text('Qui',200,150);
    
    
    
    noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(sizeTxt3);
  text("s'use",200,300)
    
   
  sizeTxt += speed;
  sizeTxt2 += speed;
  sizeTxt3 += speed;
  }
  else {   sizeTxt += speed2;
  sizeTxt2 += speed2;
  sizeTxt3 += speed2;}
 
   
  
}
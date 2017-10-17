var cnv;
var index = 0;

function setup() {
  cnv = createCanvas(windowWidth,windowHeight);
  cnv.parent("#cnv");
  background(0,0);
}

function draw() {
  noStroke();
  fill((index==0)?255:0,(index==1)?255:0,(index==2)?255:0, 1);
  ellipse(mouseX, mouseY, 90);
}


function windowResized(){
cnv.resize(windowWidth,windowHeight);
background(0,0);
}

function mousePressed(){
  ++index;
  if(index >=3) index%=3;
}

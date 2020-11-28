var hr,m,s;
var hrAngle,mAngle,sAngle;
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  
}

function draw() {
  background(255,255,255);  
  translate(400,200);
  rotate(270);
  hr = hour();
  m = minute();
  s = second();
 
  sAngle = map(s,0,60,0,360);
  mAngle = map(m,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360)
  
  push();
  rotate(sAngle);
  stroke("#00b0ff");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push()
  rotate(mAngle);
  stroke("#ffc107");
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  push();
  rotate(hrAngle)
  stroke("#e91e63");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  noFill();
  strokeWeight(7);
  stroke("#00b0ff");
  arc(0,0,270,270,0,sAngle);

  stroke("#ffc107");
  arc(0,0,250,250,0,mAngle);

  stroke("#e91e63");
  arc(0,0,230,230,0,hrAngle);
 
  drawSprites();
}
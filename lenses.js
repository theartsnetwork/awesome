var canvas;
var pic;
var mask;

var t = 0.0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight); 
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  pic = loadImage("pic2.jpg");
  mask = loadImage("mask.png");
} 

function draw() {
  background(0);
  t=t+0.1;
  
  blendMode(ADD);
  imageMode(CENTER);
  image(mask, mouseX, mouseY, mask.width+sin(t)*20, mask.height+sin(t)*20);

  
  blendMode(DARKEST);
  imageMode(CORNERS);
  image(pic, 0, 0, width, height);
}
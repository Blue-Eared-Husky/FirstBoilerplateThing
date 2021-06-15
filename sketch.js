var box;
var box2;
var square;
var rectangular_box;
var edges;

function setup() {
  createCanvas(800,400);
  box = createSprite(400, 200, 50, 50);
  box1 = createSprite(100,150,20,20);
  box2 = createSprite(300,300,100,100);
  square = createSprite(10,10,10,10);
  rectangular_box = createSprite(100,100,10,20);
  edges = createEdgeSprites();
  box.velocityX = 5;
  box.velocityY = 5;  
}

function draw() {
  box.bounceOff(edges);
  background(0);  
  text("potato", 200,200);
  drawSprites();
}
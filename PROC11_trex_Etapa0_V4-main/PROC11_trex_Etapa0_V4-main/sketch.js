
var trex ,trex_running;
var edges;
function preload(){
 trex_running = loadAnimation("trex1.png","trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
  trex = createSprite(50, 70, 20, 50)
  edges = createEdgeSprites();
  trex.addAnimation("running", trex_running);
}

function draw(){
  background("white")
  if(keyDown("space") && trex.y>=100){
    trex.velocityY = -10
}
trex.velocityY=trex.velocityY +0.8;
  
  
drawSprites();
}

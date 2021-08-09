var path,boy
var pathImg,boyImg
//game states
var PLAY=1
var END=0
var gameState=1
function preload(){
  //pre-load images
  pathimg = loadImage("path.png")
  boyImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400)
  //create sprites here
  //moving background
  path=createSprite(200,200)
path.addImage(pathImg)
path.velocityY = 4
path.scale=1.2

//creating boy running
boy = createSprite(width/2,height-20,20,20)
boy.addAnimation("prathamrunning",boyImg)
boy.scale=0.08
}

function draw() {
  if(gameState===PLAY){
  background(0)
  boy.x = World.mouseX
  
  edges= createEdgeSprites()
  boy.collide(edges)
  
  //code to reset the background
  if(path.y > height){
    path.y = height/2
  }
}
}


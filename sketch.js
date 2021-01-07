
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup(){
  monkey = createSprite(50,285,10,10)
  monkey.addAnimation("running", monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(200,320,400,10)
  
  obstacleGroup=new Group()
  foodGroup=new Group()
}


function draw(){
  background("white")
  score=frameCount/10
  text("Survival Time: "+score,160,50)
  monkey.collide(ground)
  monkey.velocityY=monkey.velocityY+1
  if (keyDown("space") && monkey.y>200){
    monkey.velocityY=-15
  }
  drawSprites()
  if (frameCount%300===0){
      spawnOb()
  }
  if (frameCount%80===0){
      food()
  }

}
function spawnOb() {
  
  obstacle=createSprite(450,290,10,10)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.15
  obstacle.velocityX=-5
  obstacle.lifetime=300
  obstacleGroup.add(obstacle)

}
function food(){
  banana = createSprite(425,random(120,200),10,10)
  banana.addImage(bananaImage)
  banana.velocityX=-5
  banana.scale=0.1
  banana.lifetime=300
  foodGroup.add(banana)
}





var sword,swordImage,fruitGroup,fruit,fruit1,fruit2,fruit3,fruit4,alien,alien1,aliengroup,score,gameOver,gameOverImage;

var PLAY = 1;

var END = 0;

var gameState = 1;
var score;

function preload(){

    swordImage = loadImage("sword.png");  
  
    fruit1 = loadImage("fruit1.png");  
    fruit2 = loadImage("fruit2.png");  
    fruit3 = loadImage("fruit3.png");  
    fruit4 = loadImage("fruit4.png");  
    alien1 = loadImage("alien1.png");  
  
    gameOverImage = loadImage("gameover.png");
    
}

function setup(){
    createCanvas(500,500);  
    
    sword=createSprite(200,200,20,20);
    sword.addImage(swordImage);
    sword.scale=0.5;
  
   
    score=0;  
     fruitgroup=createGroup();
     aliengroup=createGroup();
}


function draw(){
    background("lightblue");
    text("SCORE:"+score,420,20);
    if(gameState===PLAY){
       
      spawnenemy();
      fruits();
      sword.x=mouseX;
      sword.y=mouseY;
      if(fruitgroup.isTouching(sword)){
        fruitgroup.destroyEach();
        score=score+2;
      }
     if(sword.isTouching(aliengroup)){
       aliengroup.destroyEach();
       gameState=0;
     }
        
    } else if (gameState===END){
      sword.addImage(gameOverImage) ;  
      sword.y = 300;
      sword.x = 300;        
      fruitgroup.destroyEach();  
      aliengroup.destroyEach(); 
    }
    
  drawSprites();  

function fruits(){
  if(frameCount % 80 === 0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1);
    }else if(r==2){
      fruit.addImage(fruit2);
    }else if(r==3){
      fruit.addImage(fruit3);
    }else{
      fruit.addImage(fruit4);
    }
    fruit.y=Math.round(random(50,340));
    fruit.velocityX=-7;
    fruit.lifetime=71;
    fruitgroup.add(fruit);
 }
     
}
 

function spawnenemy(){

if(frameCount%200===0){
  alien=createSprite(400,200,20,20);
  alien.addAnimation("moving",alien1);
  alien.y=Math.round(random(100,300));
  alien.velocityX=-8;
  alien.lifetime=71;
  aliengroup.add(alien);
}

}


}
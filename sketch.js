
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
    



function preload(){

lion_Animation = loadAnimation("./assets/lion1.png","./assets/lion2.png","./assets/lion3.png",
"./assets/lion4.png","./assets/lion5.png","./assets/lion6.png","./assets/lion7.png");
background_image = loadImage("./assets/jungle.jpg");

}




function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
   
  
  /*jungleBackground = createSprite(450,350,900,700)
  jungleBackground.addImage("jungle",background_image);
  jungleBackground.scale = 1.95*/

   lion = createSprite(200,600,20,40)
   lion.addAnimation("moving",lion_Animation)
   lion.scale = 0.5;
   
   
   
}


function draw() 
{
 // background(51);
 image(background_image,0,0,width*6,height)
  
 
  lionRun()
  drawSprites()
  
}
function lionRun(){
  if(keyIsDown(RIGHT_ARROW)){
     lion.velocityX +=2
  }
}


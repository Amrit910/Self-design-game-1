var charlie;
var lab, labImg;
var clouds;
var charlieImg;

function preload(){
  labImg = loadImage("lab.jpg");
  charlieImg = loadImage("charlie.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  lab = createSprite(0,0,1200,400);

  lab.addImage(labImg);
  lab.scale = 2.5;

  //createSprite(400, 200, 50, 50);
  charlie = createSprite(1100,360,30,60);

  charlie.addImage(charlieImg);
  charlie.scale = 0.2;


}
function draw() {
   
  lab.velocityX = -3;
  if (lab.x < 0)
  {
    lab.x = lab.width/2;
  }
  if (keyDown(UP_ARROW)){
    charlie.velocityY = -2;
  }

  if (keyDown(DOWN_ARROW)){
    charlie.velocityY = 2;
  }

  if (keyDown(LEFT_ARROW)){
    charlie.velocityX = -2;
  }

  if (keyDown(RIGHT_ARROW)){
    charlie.velocityX = 2;
  }
  spawnEnemy();

  drawSprites();



}

function spawnEnemy()
{
  if (frameCount%80 === 0)
  {
    enemy = createSprite();

  }

}
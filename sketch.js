var fixRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixRect = createSprite(400, 200, 50, 50);
  fixRect.shapeColor = "blue"
  fixRect.debug  = true;

  movingRect = createSprite(100,100,50,50);
  movingRect.shapeColor = "blue"
  movingRect.debug = true;
}

function draw() {
  background(0);  
movingRect.x = mouseX;
movingRect.y = mouseY;

if(fixRect.x-movingRect.x < fixRect.width/2 + movingRect.width/2 &&
  movingRect.x -fixRect.x < fixRect.width/2 + movingRect.width/2 &&
  fixRect.y-movingRect.y < fixRect.height/2 + movingRect.height/2 &&
  movingRect.y-fixRect.y < fixRect.height/2 + movingRect.height/2 )
{
  fixRect.shapeColor = "yellow"
  movingRect.shapeColor = "yellow"
}

else{
  fixRect.shapeColor = "blue"
  movingRect.shapeColor = "blue"
}
  drawSprites();
}
var box = createSprite(150,150,25,25);
box.shapeColor = "blue";


function setup() {
  createCanvas(400,400);
  
}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW))
  {
   background("red");
  }

  if (keyIsDown(LEFT_ARROW))
  {
    background("blue");
  }

  if (keyIsDown(UP_ARROW))
  {
    background("yellow");
   }

  if (keyIsDown(DOWN_ARROW))
  {
    background("purple");;
  }

  drawSprites();
}
  


 





var thickness,wall;
var speed,weight,bullet;
function setup() {
  createCanvas(1600,400);
speed =random(223,321)
weight =random(30,52)
thickness =random(22,83)
bullet =createSprite(50, 200, 20, 5);
bullet.shapeColor="white"
bullet.velocityX=speed;
bullet.velocityX=14
wall =createSprite(1100,190,thickness,height/2);
}

function draw() {
  background(955,255,255);
  background("black")  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      wall.shapeColor=color("Red");
    }
    if(deformation<100)
    {
     wall.shapeColor=color("Green");
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
  return false;
}
var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
speed =random(55,90)
weight =random(400,1500)
car =createSprite(50, 200, 50, 50);
car.velocityX=speed;
car.velocityX=14
wall =createSprite(1100,190,60,200)
}

function draw() {
  background(955,255,255);
  background("black")  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color("Red");
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color("Yellow");
    }
    if(deformation<100)
    {
     car.shapeColor=color("Green");
    }
  }
  drawSprites();
}
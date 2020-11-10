var bullet, wall;
var speed, weight, thickness;

function setup() 
{ 
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color("white");

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor= color (80,80,80);
}

function draw() {
  background("black"); 
  
 if (hasCollided (bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/ (thickness * thickness * thickness);
     bullet.x = wall.x - wall.width/2;

     if (damage > 10) 
     {
       wall.shapeColor= color(255,0,0);
     } else 
     {if  (damage < 10)
       {
         wall.shapeColor= color(0,255,0);
       }
      }
  }

  drawSprites();
} 

function hasCollided (wall1,bullet1)
{
  bullet1RightEdge = wall.x - bullet1.width;
  wall1LeftEdge = wall1.x;
  
  if (bullet1RightEdge >= wall1LeftEdge) 
  {
     return true;
  } 
  else 
   {
      return false;
   }
}
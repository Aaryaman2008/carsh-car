var car,wall;
var weight,speed;

function setup() {
  createCanvas(1600,400);
wall  =createSprite(1400, 200, 60, height/2);
wall.shapeColor=color(200,80,80);

car  =createSprite(200, 200, 50, 50);
car.shapeColor=0;


speed=random(60,90);
weight=random(400,1500);
}
speed
function draw() {
  background(255,255,255);  
  car.velocityX=speed;

if(wall.x-car.x< (car.width+wall.width)/2){

car.velocityX=0;
var deformation=0.5 * speed * weight *speed/22509

if(deformation>180  ){

car.shapeColor="red";

}

if(deformation > 100 && deformation<180){

  car.shapeColor=color(230,230,0);

}

if(deformation<100){

  car.shapeColor=color(0,225,0);

}
}

  drawSprites();
}
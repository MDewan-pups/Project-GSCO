var car, wall;
var speed, weight;


function setup() {
  createCanvas(800,400);
  wall= createSprite(700, 200, 60, height/2);
  car= createSprite(50,200,50,50);
  
  speed= random(55,180);
  weight= random(400,1500)
  car.velocityX=speed; 
  
  
}

function draw() {
  background("Black"); 
  console.log(0.5*weight*speed*speed)/(22500)
  
  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.x=wall.x-55;
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/(22500);
    if(deformation>180){
      car.shapeColor="red";
    }
    else if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }
    else if(deformation<100){
      car.shapeColor="green";
    }
  }
  drawSprites();
}

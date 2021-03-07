var balloon, balloonImage1, balloonImage2, balloonImage3;
var backgroundImage;

function preload(){
  backgroundImage = loadImage("Hot Air Ballon-01.png");
  balloonImage1 = loadImage("Hot Air Ballon-02.png");
  balloonImage2 = loadImage("Hot Air Ballon-03.png");
  balloonImage3 = loadImage("Hot Air Ballon-04.png");
}

function setup() {
  createCanvas(800,500);

  balloon = createSprite(100,480,50,50);
  balloon.addImage(balloonImage1, balloonImage2, balloonImage3);
  
}

function draw() {
  background(backgroundImage);  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
  }
  
  drawSprites();
}
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
   
    block1 = createSprite(130,570,160,50);
    block1.shapeColor = "blue"

    block2 = createSprite(300,570,160,50);
    //ball = createSprite(random(20,750),100, 40,40);
    block2.shapeColor = "orange"

    block3 = createSprite(470,570,160,50);
    block3.shapeColor = "purple"

    block4 = createSprite(640,570,160,50);
    block4.shapeColor = "green"

     box =  createSprite(random(20,750),300,50,50);
     box.velocityY = 10;
     box.velocityX = 4;
     box.shapeColor = "white"

}

function draw() {
    background("lightgrey");

    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(block1.isTouching(box) && box.bounceOff(block1)) 
    {
      box.shapeColor = "blue"
      music.play();
    }

    if(block2.isTouching(box))
    {
      box.shapeColor = rgb(255,128,0);
      box.velocityY = 0;
      music.stop();
    }

    if(block3.isTouching(box) && box.bounceOff(block3)) 
    {
      box.shapeColor = ("purple")
      music.stop();    
    }

    if(block4.isTouching(box) && box.bounceOff(block4)) 
    {
      box.shapeColor = ("green")
      music.stop();
    }

    drawSprites();
}

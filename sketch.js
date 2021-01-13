const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0;
var engine, world;
var  block1;
var backgroundImg,platform;
var hexagon, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    

    
  
    log = new Log(810,260,300, PI/2);

   
  

   
    hexagon = new hexagon(200,50);

    
    slingshot = new SlingShot(hexagon.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();
    block1.display();
    log.display();
    block1.score();
    block3.score();
   
    block3.display();
   

  
    

    hexagon.display();
    platform.display();
   
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

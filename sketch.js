const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand1;
var stand2;

var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;


var block8;
var block9;
var block10;
var block11;
var block12;

var block13;
var block14;
var block15;

var block16;

var block17;
var block18;
var block19;
var block20;
var block21;

var block22;
var block23;
var block24;

var block25;

var polygon;

var launcher;

var score = 0;

function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;
  
  // create Bodies here

  stand1 = new Stand(400,375,300,12);

  stand2 = new Stand(700,250,180,12);

// block of first pyramid block1 to block16
  block1 = new Block1(300,200,30,40);
  block2 = new Block1(330,200,30,40);
  block3 = new Block1(360,200,30,40);
  block4 = new Block1(390,200,30,40);
  block5 = new Block1(420,200,30,40);
  block6 = new Block1(450,200,30,40);
  block7 = new Block1(480,200,30,40);

block8 = new Block2(330,150,30,40);
block9 = new Block2(360,150,30,40);
block10 = new Block2(390,150,30,40);
block11 = new Block2(420,150,30,40);
block12 = new Block2(450,150,30,40);

block13 = new Block3(360,100,30,40);
block14 = new Block3(390,100,30,40);
block15 = new Block3(420,100,30,40);

block16 = new Block4(390,50,30,40);

//block of second pyramid

block17 = new Block1(700,200,30,40);
block18 = new Block1(670,200,30,40);
block19 = new Block1(640,200,30,40);
block20 = new Block1(730,200,30,40);
block21 = new Block1(760,200,30,40);

block22 = new Block3(670,100,30,40);
block23 = new Block3(700,100,30,40);
block24 = new Block3(730,100,30,40);

block25 = new Block2(700,50,30,40);

polygon = new Polygon(50,200,40,40);

launcher = new Launcher(polygon.body,{x:50,y:250});


  Engine.run(engine);

  
}

function draw() {
  rectMode(CENTER);
  background(0)
  
 // displaying bodies here
 stand1.display();
 stand2.display();

 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 

 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();

 block13.display();
 block14.display();
 block15.display();

 block16.display();

block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

block22.display();
block23.display();
block24.display();

block25.display();

polygon.display();

launcher.display();

text("Score :" + score,750,40);

block1.score();
block2.score();
block3.score();
block24.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();
block21.score();
block22.score();
block23.score();
block24.score();
block25.score();


  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
  if(keyCode === 32){
    launcher.attach(polygon.body)
  }
}


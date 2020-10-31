const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stone1;
var launcher;
var mango1, mango2, mango3, mango4, mango5, mango6;

function preload(){
  tree_img=loadImage("tree.png");
  boy_img=loadImage("boy.png");
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground (500,600,1000,20);
  stone1 = new Stone (130,500,20);

  launcher = new Launcher (stone1.body,{x:130, y:500});

  mango1 = new Mango (600,300,20);
  mango2 = new Mango (700,200,20);
  mango3 = new Mango (900,300,20);
  mango4 = new Mango (800,200,20);
  mango5 = new Mango (650,270,20);
  mango6 = new Mango (600,300,20);

}

function draw() {
  background("lightgrey")
  image(tree_img,500,100,500,500);
  image(boy_img,100,450,200,200)

  ground.display();
  stone1.display();
  launcher.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  detectollision(stone1,mango1)
  detectollision(stone1,mango2)
  detectollision(stone1,mango3)
  detectollision(stone1,mango4)
  detectollision(stone1,mango5)
  detectollision(stone1,mango6)
}

function mouseDragged(){
  Matter.Body.setPosition (stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if(keyCode === 32){
  Matter.Body.setPosition(stone1.body, {x:130, y:500})
  launcher.attach(stone1.body);
  }
}

function detectollision(stone,mango){
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance<=mango.radius+stone.radius)
  {
    Matter.Body.setStatic(mango.body,false);
  }
}
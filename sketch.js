const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var wall1,wall2,wall3,wall4;
var button1,button2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  wall1=new Ground(200,390,400,20)
  wall2=new Ground(390,200,20,400)
  wall3=new Ground(10,200,20,400)
  wall4=new Ground(200,10,400,20)

  var balloptions={
    restitution:0.95
  }
  ball=Bodies.circle(200,100,20,balloptions)
  World.add(world,ball)

  button1=createImg("push.png")
  button1.position(220,30)
  button1.size(30,30)
  button1.mouseClicked(Hforce)

  button2=createImg("push.png")
  button2.position(20,30)
  button2.size(30,30)
  button2.mouseClicked(Vforce)
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20)
  wall1.show()
  wall2.show()
  wall3.show()
  wall4.show()

}


function Hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function Vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
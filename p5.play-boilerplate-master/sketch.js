const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World

var engine, world;
var object;

function setup() {
  
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  object = Bodies.rectangle (200, 200, 50, 50);
  World.add(world.object);
}
ss
function draw() {
  background("cyan"); 
  rectMode(CENTER); 
  rect(200,200,50,50);

}
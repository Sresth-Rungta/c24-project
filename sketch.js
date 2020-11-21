
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 paper = new Paper(100,40)
 ground = new Ground(800,680,1600,40)
 dustbin1 = new Dustbin(1205,615,20,120)
 dustbin2 = new Dustbin(1300,665,170,20)
 dustbin3 = new Dustbin(1390,615,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:50, y:-50})

	}
}



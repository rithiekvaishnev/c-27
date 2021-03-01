
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5;
var roof;
var chain1,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(300,500,120,20);

	box1 = new Bob(300,400,50,50);
	box2 = new Bob(320,400,50,50);
	box3 = new Bob(340,400,50,50);
	box4 = new Bob(360,400,50,50);
	box5 = new Bob(380,400,50,50);
	
	chain1 = new Chain(box1.body,roof.body);
	chain2 = new Chain(box2.body,roof.body);
	chain3 = new Chain(box3.body,roof.body);
	chain4 = new Chain(box4.body,roof.body);
	chain5 = new Chain(box5.body,roof.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	Engine.update(engine);
  
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	
	roof.display();

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
  
 
}



